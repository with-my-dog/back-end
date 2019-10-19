import CreateShopDTO from '../../../interface/dto/shop.dto.create';

export default class CreateShopCommand {
  public readonly name: string;
  public readonly address: string;
  public readonly latitude: number;
  public readonly longitude: number;
  public readonly phone: string;
  public readonly open: string;
  public readonly close: string;

  constructor(createShopDto: CreateShopDTO) {
    const { name, address, latitude, longitude, phone, open, close } = createShopDto;
    this.name = name;
    this.address = address;
    this.latitude = latitude;
    this.longitude = longitude;
    this.phone = phone;
    this.open = open;
    this.close = close;
  }
}
