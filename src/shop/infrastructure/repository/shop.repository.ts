import { EntityRepository, Repository } from 'typeorm';
import ShopEntity from '../entity/shop.entity';

@EntityRepository(ShopEntity)
export default class ShopRepository extends Repository<ShopEntity> {}
