import { User } from "../../entities/User";
import { IUsersRepository } from "../IUsersRepository";
import { ICreateUserDTO } from "../../DTOS/ICreateUserDTO";
import { IUpdateUserDTO } from "../../DTOS/IUpdateUserDTO";

class UsersRepository implements IUsersRepository {
  private users: User[];

  private static INSTANCE: UsersRepository;

  private constructor() {
    this.users = [];
  }

  public static getInstance(): UsersRepository {
    if (!UsersRepository.INSTANCE) {
      UsersRepository.INSTANCE = new UsersRepository();
    }

    return UsersRepository.INSTANCE;
  }

  create({ email, givenName, familyName }: ICreateUserDTO): void {
    const user = new User();

    Object.assign(user, {
      email,
      givenName,
      familyName,
      create: new Date(),
    });

    this.users.push(user);
  }

  list(): User[] {
    return this.users;
  }

  update({ user_id, email, givenName, familyName }: IUpdateUserDTO): void {
    const user = this.users.find((user) => user.id === user_id) as User;

    if (email) {
      user.email = email as string;
    }
    if (givenName) {
      user.givenName = givenName as string;
    }
    if (familyName) {
      user.familyName = familyName as string;
    }
  }

  delete(user_id: string): void {
    this.users.map((user, index) => {
      user.id === user_id && this.users.splice(index, 1);
    });
  }
}

export { UsersRepository };
