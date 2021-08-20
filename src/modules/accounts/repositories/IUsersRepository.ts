import { ICreateUserDTO } from "../dtos/ICreateUserDTO";
import { IUpdateUserDTO } from "../dtos/IUpdateUserDTO";
import { User } from "../typeorm/entities/User";

interface IUsersRepository {
  list(): Promise<User[]>;
  create({ email, givenName, familyName }: ICreateUserDTO): Promise<User>;
  update({
    user_id,
    email,
    givenName,
    familyName,
  }: IUpdateUserDTO): Promise<User>;
  delete(user_id: string): Promise<void>;
  findByEmail(email: string): Promise<User | undefined>;
  findById(id: string): Promise<User | undefined>;
}

export { IUsersRepository };
