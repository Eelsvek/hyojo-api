import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, DeleteDateColumn, BaseEntity, UpdateDateColumn } from 'typeorm';

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    nullable: true
  })
  firstName?: string;

  @Column({
    nullable: true
  })
  lastName?: string;

  @Column({
    unique: true
  })
  email: string;

  @Column()
  password: string;
  
  @CreateDateColumn()
  created: Date;

  @UpdateDateColumn()
  updated: Date;

  @DeleteDateColumn()
  deletedAt?: Date;
} 