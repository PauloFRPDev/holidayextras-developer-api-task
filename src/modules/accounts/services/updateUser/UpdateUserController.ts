import { Request, Response } from "express";
import { container } from "tsyringe";

import { UpdateUserService } from "./UpdateUserService";

class UpdateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { user_id } = request.params;
    const { email, givenName, familyName } = request.body;

    const updateUserService = container.resolve(UpdateUserService);

    await updateUserService.execute({
      user_id,
      email,
      givenName,
      familyName,
    });

    return response.status(204).json();
  }
}

export { UpdateUserController };
