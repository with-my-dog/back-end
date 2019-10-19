import { ApiModelProperty } from '@nestjs/swagger';

export default class ReadShopListDTO {
  @ApiModelProperty()
  public readonly northEast: string;

  @ApiModelProperty()
  public readonly southWest: string;

  constructor(northEast: string, southWest: string) {
    this.northEast = northEast;
    this.southWest = southWest;
  }
}
