import { injectable, inject } from "tsyringe";

import { AppError } from "../../../../errors/AppError";
import { IUsersRepository } from "../../repositories/IUsersRepository";

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

  async execute({ email, givenName, familyName }: IRequest): Promise<void> {
    const user = await this.usersRepository.findByEmail(email);

    if (user) {
      throw new AppError("Email already in use.");
    }

    await this.usersRepository.create({ email, givenName, familyName });
  }
}

export { CreateUserService };
