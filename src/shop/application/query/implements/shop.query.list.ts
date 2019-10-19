import ReadShopListDTO from '../../../interface/dto/shop.dto.read.list';

export default class ReadShopListQuery {
  public readonly northEast: string;
  public readonly southWest: string;

  constructor(dto: ReadShopListDTO) {
    const { northEast, southWest } = dto;
    this.northEast = northEast;
    this.southWest = southWest;
  }
}
