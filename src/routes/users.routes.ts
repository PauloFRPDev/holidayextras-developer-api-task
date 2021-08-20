import { Router } from "express";

import { listUsersController } from "../modules/accounts/services/listUsers";
import { createUserController } from "../modules/accounts/services/createUser";
import { updateUserController } from "../modules/accounts/services/updateUser";
import { deleteUserController } from "../modules/accounts/services/deleteUser";
import { showUserController } from "src/modules/accounts/services/showUser";

const usersRoutes = Router();

// Index
usersRoutes.get("/", (request, response) => {
  return listUsersController.handle(request, response);
});

// Show
usersRoutes.get("/:user_id", (request, response) => {
  return showUserController.handle(request, response);
});

// Create
usersRoutes.post("/", (request, response) => {
  return createUserController.handle(request, response);
});

// Update
usersRoutes.put("/:user_id", (request, response) => {
  return updateUserController.handle(request, response);
});

// Delete
usersRoutes.delete("/:user_id", (request, response) => {
  return deleteUserController.handle(request, response);
});

export { usersRoutes };
