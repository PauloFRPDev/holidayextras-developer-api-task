import { injectable, inject } from "tsyringe";

import { AppError } from "../../../../errors/AppError";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { User } from "../../typeorm/entities/User";

interface IRequest {
  email: string;
  givenName: string;
  familyName: string;
}

@injectable()
class CreateUserService {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) {}

  async execute({ email, givenName, familyName }: IRequest): Promise<User> {
    const userAlreadyExists = await this.usersRepository.findByEmail(email);

    if (
      email.trim() === "" ||
      givenName.trim() === "" ||
      familyName.trim() === ""
    ) {
      throw new AppError("You must pass a valid value.");
    }

    if (userAlreadyExists) {
      throw new AppError("Email already in use.");
    }

    const user = await this.usersRepository.create({
      email,
      givenName,
      familyName,
    });

    return user;
  }
}

export { CreateUserService };
