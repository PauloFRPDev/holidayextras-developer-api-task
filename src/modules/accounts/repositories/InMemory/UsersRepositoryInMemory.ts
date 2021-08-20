import { AppError } from "../../../../errors/AppError";

import { User } from "../../typeorm/entities/User";
import { IUsersRepository } from "../IUsersRepository";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { IUpdateUserDTO } from "../../dtos/IUpdateUserDTO";

class UsersRepositoryInMemory implements IUsersRepository {
  users: User[] = [];

  async create({
    email,
    givenName,
    familyName,
  }: ICreateUserDTO): Promise<User> {
    const user = new User();

    Object.assign(user, {
      email,
      givenName,
      familyName,
      created: new Date(),
    });

    this.users.push(user);

    return user;
  }

  async list(): Promise<User[]> {
    return this.users;
  }

  async update({
    user_id,
    email,
    givenName,
    familyName,
  }: IUpdateUserDTO): Promise<User> {
    const user = await this.findById(user_id);

    if (email) {
      const findUser = await this.findByEmail(email);

      const emailAlreadyInUse = findUser && findUser.id !== user_id;

      if (emailAlreadyInUse) {
        throw new AppError("Email already in use.");
      }

      user.email = email;
    }
    if (givenName) {
      user.givenName = givenName as string;
    }
    if (familyName) {
      user.familyName = familyName as string;
    }

    return user;
  }

  async delete(user_id: string): Promise<void> {
    this.users.map((user, index) => {
      user.id === user_id && this.users.splice(index, 1);
    });
  }

  async findByEmail(email: string): Promise<User> {
    return this.users.find((user) => user.email === email) as User;
  }

  async findById(id: string): Promise<User> {
    return this.users.find((user) => user.id === id) as User;
  }
}

export { UsersRepositoryInMemory };
