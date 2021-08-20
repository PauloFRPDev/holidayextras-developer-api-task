import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
  email?: string;
  givenName?: string;
  familyName?: string;
}

class UpdateUserService {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id, email, givenName, familyName }: IRequest) {
    this.usersRepository.update({ user_id, email, givenName, familyName });
  }
}

export { UpdateUserService };
