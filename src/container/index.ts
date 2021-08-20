import { container } from "tsyringe";

import { IUsersRepository } from "../modules/accounts/repositories/IUsersRepository";
import { UsersRepository } from "../modules/accounts/typeorm/repositories/UsersRepository";

container.registerSingleton<IUsersRepository>(
  "UsersRepository",
  UsersRepository
);
