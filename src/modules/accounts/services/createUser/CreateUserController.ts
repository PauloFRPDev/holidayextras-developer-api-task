import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateUserService } from "./CreateUserService";

class CreateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { email, givenName, familyName } = request.body;

    const createUserService = container.resolve(CreateUserService);

    await createUserService.execute({
      email,
      givenName,
      familyName,
    });

    return response.status(201).send();
  }
}

export { CreateUserController };
