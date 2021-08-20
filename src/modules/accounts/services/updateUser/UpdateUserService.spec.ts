import { AppError } from "../../../../errors/AppError";
import { UsersRepositoryInMemory } from "../../repositories/InMemory/UsersRepositoryInMemory";
import { UpdateUserService } from "./UpdateUserService";

let usersRepositoryInMemory: UsersRepositoryInMemory;
let updateUserService: UpdateUserService;

describe("Update User", () => {
  beforeEach(() => {
    usersRepositoryInMemory = new UsersRepositoryInMemory();
    updateUserService = new UpdateUserService(usersRepositoryInMemory);
  });

  it("should be able to update an existent user", async () => {
    const user = await usersRepositoryInMemory.create({
      email: "test@test.com",
      givenName: "givenTest",
      familyName: "familyTest",
    });

    await updateUserService.execute({
      user_id: user.id,
      email: "test2@test.com",
      givenName: "givenTest2",
    });

    expect(user).toHaveProperty("id");
    expect(user).toHaveProperty("email");
    expect(user).toHaveProperty("givenName");
    expect(user).toHaveProperty("familyName");
    expect(user.email).toBe("test2@test.com");
    expect(user.givenName).toBe("givenTest2");
  });

  it("should not be able to update a nonexistent user", () => {
    expect(async () => {
      await updateUserService.execute({
        user_id: "nonexistentId",
      });
    }).rejects.toBeInstanceOf(AppError);
  });

  it("should not be able to update a user with an email that is already in use", () => {
    expect(async () => {
      const user = await usersRepositoryInMemory.create({
        email: "test@test.com",
        givenName: "givenTest",
        familyName: "familyTest",
      });

      await usersRepositoryInMemory.create({
        email: "test2@test.com",
        givenName: "givenTest2",
        familyName: "familyTest2",
      });

      await updateUserService.execute({
        user_id: user.id,
        email: "test2@test.com",
      });
    }).rejects.toBeInstanceOf(AppError);
  });
});
