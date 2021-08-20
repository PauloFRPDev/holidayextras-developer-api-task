import { UsersRepository } from "../../repositories/implementations/UsersRepository";
import { UpdateUserController } from "./UpdateUserController";
import { UpdateUserService } from "./UpdateUserService";

const usersRepository = UsersRepository.getInstance();

const updateUserService = new UpdateUserService(usersRepository);

const updateUserController = new UpdateUserController(updateUserService);

export { updateUserController };
