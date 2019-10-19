import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import AppController from './app.controller';
import AccountModule from './account/account.module';
import AccountEntity from './account/infrastructure/entity/account.entity';
import AppConfiguration from './app.config';
import AuthModule from './auth/auth.module';
import ShopEntity from './shop/infrastructure/entity/shop.entity';
import ShopModule from './shop/shop.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: AppConfiguration.DATABASE_TYPE,
      host: AppConfiguration.DATABASE_HOST,
      port: AppConfiguration.DATABASE_PORT,
      database: AppConfiguration.DATABASE_NAME,
      username: AppConfiguration.DATABASE_USER,
      password: AppConfiguration.DATABASE_PASSWORD,
      synchronize: true,
      logging: true,
      entities: [AccountEntity, ShopEntity],
    }),
    AccountModule,
    ShopModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [],
})
export default class ApplicationModule {
  constructor(private readonly connection: Connection) {}
}
