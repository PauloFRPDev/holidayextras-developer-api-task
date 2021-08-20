import { AppError } from "../../../../errors/AppError";
import { IUsersRepository } from "../../repositories/IUsersRepository";

class DeleteUserService {
  constructor(private usersRepository: IUsersRepository) {}

  execute(user_id: string) {
    const user = this.usersRepository.findById(user_id);

    if (!user) {
      throw new AppError("User doesn't exists.");
    }

    this.usersRepository.delete(user_id);
  }
}

export { DeleteUserService };
