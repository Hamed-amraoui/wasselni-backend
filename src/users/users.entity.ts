import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

export enum UserRole {
  DRIVER = 'driver',
  PASSENGER = 'passenger',
  ADMIN = 'admin',
}

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column()
  first_name: string;

  @Column()
  last_name: string;

  @Column({ type: 'enum', enum: UserRole, default: UserRole.PASSENGER })
  role: UserRole;
}
