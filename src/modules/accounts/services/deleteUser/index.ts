import { UsersRepository } from "../../repositories/implementations/UsersRepository";
import { DeleteUserController } from "./DeleteUserController";
import { DeleteUserService } from "./DeleteUserService";

const usersRepository = UsersRepository.getInstance();

const deleteUserService = new DeleteUserService(usersRepository);

const deleteUserController = new DeleteUserController(deleteUserService);

export { deleteUserController };
