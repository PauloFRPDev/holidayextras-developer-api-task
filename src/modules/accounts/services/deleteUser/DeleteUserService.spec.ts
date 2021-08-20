import { AppError } from "../../../../errors/AppError";

import { UsersRepositoryInMemory } from "../../repositories/InMemory/UsersRepositoryInMemory";
import { DeleteUserService } from "./DeleteUserService";

let usersRepositoryInMemory: UsersRepositoryInMemory;
let deleteUserService: DeleteUserService;

describe("Delete User", () => {
  beforeEach(() => {
    usersRepositoryInMemory = new UsersRepositoryInMemory();
    deleteUserService = new DeleteUserService(usersRepositoryInMemory);
  });

  it("should be able to delete a user", async () => {
    const user = await usersRepositoryInMemory.create({
      email: "test@test.com",
      givenName: "givenTest",
      familyName: "familyTest",
    });

    const usersLengthBeforeDelete = (await usersRepositoryInMemory.list())
      .length;

    await deleteUserService.execute(user.id);

    const users = await usersRepositoryInMemory.list();

    expect(usersLengthBeforeDelete).toBe(1);
    expect(users.length).toBe(0);
  });

  it("should not be able to delete a user that doesn't exists", () => {
    expect(async () => {
      await deleteUserService.execute("incorrectId");
    }).rejects.toBeInstanceOf(AppError);
  });
});
