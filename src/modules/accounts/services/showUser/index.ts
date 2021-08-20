import { UsersRepository } from "../../repositories/implementations/UsersRepository";
import { ShowUserController } from "./ShowUserController";
import { ShowUserService } from "./ShowUserService";

const usersRepository = UsersRepository.getInstance();

const showUserService = new ShowUserService(usersRepository);

const showUserController = new ShowUserController(showUserService);

export { showUserController };
