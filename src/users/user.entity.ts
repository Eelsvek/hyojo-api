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

  @Column({
    nullable: true
  })
  password: string;
  
  @CreateDateColumn()
  createdOn: Date;

  @UpdateDateColumn()
  updatedOn: Date;

  @DeleteDateColumn()
  deletedOn?: Date;
} 