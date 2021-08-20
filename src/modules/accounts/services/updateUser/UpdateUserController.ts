import { Request, Response } from "express";
import { UpdateUserService } from "./UpdateUserService";

class UpdateUserController {
  constructor(private updateUserService: UpdateUserService) {}

  handle(request: Request, response: Response): Response {
    const { user_id } = request.params;
    const { email, givenName, familyName } = request.body;

    this.updateUserService.execute({
      user_id,
      email,
      givenName,
      familyName,
    });

    return response.status(204).json();
  }
}

export { UpdateUserController };
