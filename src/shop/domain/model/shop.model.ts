import { AggregateRoot } from '@nestjs/cqrs';

export default class Shop extends AggregateRoot {
  constructor(
    public readonly shopId: string,
    public readonly name: string,
    public readonly address: string,
    public readonly latitude: number,
    public readonly longitude: number,
    public readonly phone: string,
    public readonly open: string,
    public readonly close: string,
  ) {
    super();
  }
}
