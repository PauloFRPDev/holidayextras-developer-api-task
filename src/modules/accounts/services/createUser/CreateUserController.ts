import { Request, Response } from "express";

import { CreateUserService } from "./CreateUserService";

class CreateUserController {
  constructor(private createUserService: CreateUserService) {}

  handle(request: Request, response: Response): Response {
    const { email, givenName, familyName } = request.body;

    this.createUserService.execute({
      email,
      givenName,
      familyName,
    });

    return response.status(201).send();
  }
}

export { CreateUserController };
