import { ICreateUserDTO } from "../DTOS/ICreateUserDTO";
import { IUpdateUserDTO } from "../DTOS/IUpdateUserDTO";
import { User } from "../entities/User";

interface IUsersRepository {
  list(): User[];
  create({ email, givenName, familyName }: ICreateUserDTO): void;
  update({ user_id, email, givenName, familyName }: IUpdateUserDTO): void;
  delete(user_id: string): void;
}

export { IUsersRepository };
