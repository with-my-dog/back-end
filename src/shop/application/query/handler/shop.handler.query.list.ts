import { QueryHandler, IQueryHandler } from "@nestjs/cqrs";
import ReadShopListQuery from "../implements/shop.query.list";
import { InjectRepository } from "@nestjs/typeorm";
import ShopEntity from "src/shop/infrastructure/entity/shop.entity";
import ShopRepository from "src/shop/infrastructure/repository/shop.repository";
import { HttpException, HttpStatus } from "@nestjs/common";
import { Between } from "typeorm";

@QueryHandler(ReadShopListQuery)
export class ReadShopListQueryHandler implements IQueryHandler<ReadShopListQuery> {
  constructor(
    @InjectRepository(ShopEntity) private readonly repository: ShopRepository,
  ) {}

  async execute(query: ReadShopListQuery): Promise<[ShopEntity[], number]> {
    const { northEast, southWest } = query;
    const [north, east] = northEast.trim().split(',');
    const [south, west] = southWest.trim().split(',');
    if (!north || !east || !south || !west) throw new HttpException('Bad request', HttpStatus.BAD_REQUEST);
    const list: [ShopEntity[], number] = await this.repository.findAndCount({ where: { latitude: Between(west, east), longtitude: Between(south, north) }});
    return list;
  }
}
