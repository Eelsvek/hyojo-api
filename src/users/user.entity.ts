import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, DeleteDateColumn } from 'typeorm';

@Entity()
export class User {
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