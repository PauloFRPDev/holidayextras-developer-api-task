import { getRepository, Repository } from "typeorm";

import { AppError } from "../../../../errors/AppError";

import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { IUpdateUserDTO } from "../../dtos/IUpdateUserDTO";
import { IUsersRepository } from "../../repositories/IUsersRepository";

import { User } from "../entities/User";

class UsersRepository implements IUsersRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = getRepository(User);
  }

  async list(): Promise<User[]> {
    return await this.repository.find();
  }

  async create({
    email,
    givenName,
    familyName,
  }: ICreateUserDTO): Promise<User> {
    const user = this.repository.create({
      email,
      givenName,
      familyName,
    });

    await this.repository.save(user);

    return user;
  }

  async update({
    user_id,
    email,
    givenName,
    familyName,
  }: IUpdateUserDTO): Promise<User> {
    const user = await this.findById(user_id);

    if (!user) {
      throw new AppError("User doesn't exists.");
    }

    if (email) {
      const findUser = await this.findByEmail(email);

      const emailAlreadyInUse = findUser && findUser.id !== user_id;

      if (emailAlreadyInUse) {
        throw new AppError("Email already in use.");
      }

      user.email = email;
    }
    if (givenName) {
      user.givenName = givenName;
    }
    if (familyName) {
      user.familyName = familyName;
    }

    await this.repository.save(user);

    return user;
  }

  async delete(user_id: string): Promise<void> {
    const user = await this.repository.findOne(user_id);

    if (!user) {
      return;
    }

    await this.repository.delete(user.id);
  }

  async findByEmail(email: string): Promise<User | undefined> {
    const user = await this.repository.findOne({
      where: {
        email,
      },
    });

    return user;
  }

  async findById(id: string): Promise<User | undefined> {
    const user = await this.repository.findOne(id);

    return user;
  }
}

export { UsersRepository };
