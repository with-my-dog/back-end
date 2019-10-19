import uuid from 'uuid';
import { CommandHandler, ICommandHandler, EventPublisher } from '@nestjs/cqrs';
import { InjectRepository } from '@nestjs/typeorm';
import CreateShopCommand from '../implement/shop.command.create';
import ShopEntity from '../../../infrastructure/entity/shop.entity';
import ShopRepository from '../../../infrastructure/repository/shop.repository';
import Shop from '../../../domain/model/shop.model';
import CreateShopMapper from 'src/shop/infrastructure/mapper/shop.mapper.create';

@CommandHandler(CreateShopCommand)
export class CreateShopCommandHandler implements ICommandHandler<CreateShopCommand> {
  constructor(
    @InjectRepository(ShopEntity) private readonly repository: ShopRepository,
    private readonly publisher: EventPublisher,
  ) {}

  async execute(command: CreateShopCommand): Promise<void> {
    const tokens: Array<string> = uuid.v4().split('-');
    const newAccountId: string = `${tokens[2]}${tokens[1]}${tokens[0]}${tokens[3]}${tokens[4]}`;

    const { name, address, latitude, longitude, phone, open, close } = command;
    const shop: Shop = this.publisher.mergeObjectContext(
      new Shop(newAccountId, name, address, latitude, longitude, phone, open, close),
    );
    shop.commit();
    await this.repository.save(new CreateShopMapper(shop));
  }
}