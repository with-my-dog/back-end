import Shop from '../../domain/model/shop.model';

import moment = require('moment');

export default class CreateShopMapper {
  public readonly shopId: string;

  public readonly name: string;

  public readonly address: string;

  public readonly latitude: number;

  public readonly longitude: number;

  public readonly phone: string;

  public readonly open: string;

  public readonly close: string;

  public readonly createdAt: string;

  constructor(shop: Shop) {
    this.shopId = shop.shopId;
    this.name = shop.name;
    this.address = shop.address;
    this.latitude = shop.latitude;
    this.longitude = shop.longitude;
    this.phone = shop.phone;
    this.open = shop.open;
    this.close = shop.close;
    this.createdAt = moment().format('YYYY-MM-DD HH:mm:ss');
  }
}
