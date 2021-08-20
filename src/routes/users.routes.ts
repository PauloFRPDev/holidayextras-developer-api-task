import { Router } from "express";

import { listUsersController } from "../modules/accounts/services/listUsers";
import { createUserController } from "../modules/accounts/services/createUser";
import { updateUserController } from "../modules/accounts/services/updateUser";
import { deleteUserController } from "../modules/accounts/services/deleteUser";

const usersRoutes = Router();

usersRoutes.get("/", (request, response) => {
  return listUsersController.handle(request, response);
});

usersRoutes.post("/", (request, response) => {
  return createUserController.handle(request, response);
});

usersRoutes.put("/:user_id", (request, response) => {
  return updateUserController.handle(request, response);
});

usersRoutes.delete("/:user_id", (request, response) => {
  return deleteUserController.handle(request, response);
});

export { usersRoutes };
