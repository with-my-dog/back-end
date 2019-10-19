import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'shop' })
export default class ShopEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ length: 500, unique: true, name: 'shop_ud' })
  shopId!: string;

  @Column({ length: 500 })
  name!: string;

  @Column({ length: 500 })
  address!: string;

  @Column({ default: 0 })
  latitude!: number;

  @Column({ default: 0 })
  longtitude!: number;

  @Column()
  phone!: string;

  @Column({ default: '' })
  open!: string;

  @Column({ default: '' })
  close!: string;

  @Column({ type: 'datetime', name: 'created_at' })
  createdAt!: string;

  @Column({ type: 'timestamp', default: null, name: 'updated_at' })
  updatedAt!: string;

  @Column({ type: 'datetime', default: null, name: 'deleted_at' })
  deletedAt!: string;
}
