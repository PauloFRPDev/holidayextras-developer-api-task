import { AppError } from "../../../../errors/AppError";

import { UsersRepositoryInMemory } from "../../repositories/InMemory/UsersRepositoryInMemory";
import { CreateUserService } from "./CreateUserService";

let usersRepositoryInMemory: UsersRepositoryInMemory;
let createUserService: CreateUserService;

describe("Create User", () => {
  beforeEach(() => {
    usersRepositoryInMemory = new UsersRepositoryInMemory();
    createUserService = new CreateUserService(usersRepositoryInMemory);
  });

  it("should be able to create a new user", async () => {
    const user = await createUserService.execute({
      email: "test@test.com",
      givenName: "givenTest",
      familyName: "familyTest",
    });

    expect(user).toHaveProperty("id");
  });

  it("should not be able to create a new user with the same email", () => {
    expect(async () => {
      await createUserService.execute({
        email: "test@test.com",
        givenName: "givenTest",
        familyName: "familyTest",
      });

      await createUserService.execute({
        email: "test@test.com",
        givenName: "givenTest2",
        familyName: "familyTest2",
      });
    }).rejects.toBeInstanceOf(AppError);
  });
});
