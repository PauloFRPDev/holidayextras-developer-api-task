import { Request, Response } from "express";
import { ShowUserService } from "./ShowUserService";

class ShowUserController {
  constructor(private showUserService: ShowUserService) {}

  handle(request: Request, response: Response): Response {
    const { user_id } = request.params;

    const user = this.showUserService.execute(user_id);

    return response.json(user);
  }
}

export { ShowUserController };
