import { Request, Response } from "express";
import { container } from "tsyringe";

import { ShowUserService } from "./ShowUserService";

class ShowUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { user_id } = request.params;

    const showUserService = container.resolve(ShowUserService);

    const user = await showUserService.execute(user_id);

    return response.json(user);
  }
}

export { ShowUserController };
