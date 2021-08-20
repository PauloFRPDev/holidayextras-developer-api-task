import { Request, Response } from "express";
import { DeleteUserService } from "./DeleteUserService";

class DeleteUserController {
  constructor(private deleteUserService: DeleteUserService) {}

  handle(request: Request, response: Response): Response {
    const { user_id } = request.params;

    this.deleteUserService.execute(user_id);

    return response.status(204).send();
  }
}

export { DeleteUserController };
