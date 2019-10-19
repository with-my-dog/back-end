import { ApiModelProperty } from '@nestjs/swagger';

export default class CreateShopDTO {
  @ApiModelProperty()
  public readonly name: string;

  @ApiModelProperty()
  public readonly address: string;

  @ApiModelProperty()
  public readonly latitude: number;

  @ApiModelProperty()
  public readonly longitude: number;

  @ApiModelProperty()
  public readonly phone: string;

  @ApiModelProperty()
  public readonly open: string;

  @ApiModelProperty()
  public readonly close: string;

  constructor(
    name: string,
    address: string,
    latitude: number,
    longitude: number,
    phone: string,
    open: string,
    close: string,
  ) {
    this.name = name;
    this.address = address;
    this.latitude = latitude;
    this.longitude = longitude;
    this.phone = phone;
    this.open = open;
    this.close = close;
  }
}
