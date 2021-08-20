import { AppError } from "../../../../errors/AppError";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  email: string;
  givenName: string;
  familyName: string;
}

class CreateUserService {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ email, givenName, familyName }: IRequest) {
    const user = this.usersRepository.findByEmail(email);

    if (user) {
      throw new AppError("Email already in use.");
    }

    this.usersRepository.create({ email, givenName, familyName });
  }
}

export { CreateUserService };
