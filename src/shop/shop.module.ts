import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { TypeOrmModule } from '@nestjs/typeorm';
import ShopController from './interface/shop.controller';
import { CreateShopCommandHandler } from './application/command/handler/shop.handler.command.create';
import ShopRepository from './infrastructure/repository/shop.repository';
import ShopEntity from './infrastructure/entity/shop.entity';
import { ReadShopListQueryHandler } from './application/query/handler/shop.handler.query.list';

const commandHandler = [
  CreateShopCommandHandler,
];

const queryHandler = [
  ReadShopListQueryHandler,
];

@Module({
  imports: [CqrsModule, TypeOrmModule.forFeature([ShopEntity])],
  controllers: [ShopController],
  providers: [
    ShopRepository,
    ...commandHandler,
    ...queryHandler,
  ],
})
export default class ShopModule {}
