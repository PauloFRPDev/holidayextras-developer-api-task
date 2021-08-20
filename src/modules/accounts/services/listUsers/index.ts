import { UsersRepository } from "../../repositories/implementations/UsersRepository";
import { ListUsersController } from "./ListUsersController";
import { ListUsersService } from "./ListUsersService";

const usersRepository = UsersRepository.getInstance();

const listUsersService = new ListUsersService(usersRepository);

const listUsersController = new ListUsersController(listUsersService);

export { listUsersController };
