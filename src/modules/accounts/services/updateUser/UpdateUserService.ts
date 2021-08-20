import { injectable, inject } from "tsyringe";

import { AppError } from "../../../../errors/AppError";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
  email?: string;
  givenName?: string;
  familyName?: string;
}

@injectable()
class UpdateUserService {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) {}

  async execute({ user_id, email, givenName, familyName }: IRequest): Promise<void> {
    const user = await this.usersRepository.findById(user_id);

    if (!user) {
      throw new AppError("User doesn't exists.");
    }

    await this.usersRepository.update({ user_id, email, givenName, familyName });
  }
}

export { UpdateUserService };
