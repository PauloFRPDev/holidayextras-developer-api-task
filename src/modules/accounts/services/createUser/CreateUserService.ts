import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  email: string;
  givenName: string;
  familyName: string;
}

class CreateUserService {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ email, givenName, familyName }: IRequest) {
    this.usersRepository.create({ email, givenName, familyName });
  }
}

export { CreateUserService };
