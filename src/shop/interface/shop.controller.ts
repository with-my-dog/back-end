import { ApiUseTags } from '@nestjs/swagger';
import {
  Controller, Post, Body, Get, Query,
} from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import CreateShopDTO from './dto/shop.dto.create';
import CreateShopCommand from '../application/command/implement/shop.command.create';
import Shop from '../domain/model/shop.model';
import ReadShopListQuery from '../application/query/implements/shop.query.list';
import ReadShopListDTO from './dto/shop.dto.read.list';

@ApiUseTags('Shops')
@Controller('shops')
export default class ShopController {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}

  @Post()
  create(@Body() body: CreateShopDTO): Promise<void> {
    return this.commandBus.execute(new CreateShopCommand(body));
  }

  @Get()
  getShopList(@Query() query: ReadShopListDTO): Promise<Shop[]> {
    return this.queryBus.execute(new ReadShopListQuery(query));
  }
}
