import { AppError } from "../../../../errors/AppError";
import { User } from "../../entities/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

class ShowUserService {
  constructor(private usersRepository: IUsersRepository) {}

  execute(user_id: string): User {
    const user = this.usersRepository.findById(user_id);

    if (!user) {
      throw new AppError("User doesn't exists.");
    }

    return user;
  }
}

export { ShowUserService };
