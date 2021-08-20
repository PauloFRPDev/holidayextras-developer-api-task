import { Router } from "express";

import { ListUsersController } from "../modules/accounts/services/listUsers/ListUsersController";
import { CreateUserController } from "../modules/accounts/services/createUser/CreateUserController";
import { UpdateUserController } from "../modules/accounts/services/updateUser/UpdateUserController";
import { DeleteUserController } from "../modules/accounts/services/deleteUser/DeleteUserController";
import { ShowUserController } from "../modules/accounts/services/showUser/ShowUserController";

const usersRoutes = Router();

const listUsersController = new ListUsersController();
const createUserController = new CreateUserController();
const updateUserController = new UpdateUserController();
const deleteUserController = new DeleteUserController();
const showUserController = new ShowUserController();

// Index
usersRoutes.get("/", listUsersController.handle);

// Show
usersRoutes.get("/:user_id", showUserController.handle);

// Create
usersRoutes.post("/", createUserController.handle);

// Update
usersRoutes.put("/:user_id", updateUserController.handle);

// Delete
usersRoutes.delete("/:user_id", deleteUserController.handle);

export { usersRoutes };
