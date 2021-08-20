import { IUsersRepository } from "../../repositories/IUsersRepository";

class DeleteUserService {
  constructor(private usersRepository: IUsersRepository) {}

  execute(user_id: string) {
    this.usersRepository.delete(user_id);
  }
}

export { DeleteUserService };
