import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, DeleteDateColumn, BaseEntity } from 'typeorm';

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({
    unique: true
  })
  email: string;
  
  @CreateDateColumn()
  dateCreated: Date;

  @Column()
  dateDeactivated: Date;

  @DeleteDateColumn()
  dateDeleted: Date;
}