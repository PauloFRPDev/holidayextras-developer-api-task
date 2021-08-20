import { AppError } from "../../../../errors/AppError";
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
    const user = this.usersRepository.findById(user_id);

    if (!user) {
      throw new AppError("User doesn't exists.");
    }

    this.usersRepository.update({ user_id, email, givenName, familyName });
  }
}

export { UpdateUserService };
