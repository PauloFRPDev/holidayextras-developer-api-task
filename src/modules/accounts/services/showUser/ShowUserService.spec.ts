import { AppError } from "../../../../errors/AppError";
import { UsersRepositoryInMemory } from "../../repositories/InMemory/UsersRepositoryInMemory";
import { ShowUserService } from "./ShowUserService";

let usersRepositoryInMemory: UsersRepositoryInMemory;
let showUserService: ShowUserService;

describe("Show User", () => {
  beforeEach(() => {
    usersRepositoryInMemory = new UsersRepositoryInMemory();
    showUserService = new ShowUserService(usersRepositoryInMemory);
  });

  it("should be able to show an existent user", async () => {
    const user = await usersRepositoryInMemory.create({
      email: "test@test.com",
      givenName: "givenTest",
      familyName: "familyTest",
    });

    const showUser = await showUserService.execute(user.id);

    expect(showUser).toHaveProperty("id");
    expect(showUser).toHaveProperty("email");
    expect(showUser).toHaveProperty("givenName");
    expect(showUser).toHaveProperty("familyName");
    expect(showUser).toBe(user);
  });

  it("should not be able to show a nonexistent user", () => {
    expect(async () => {
      await showUserService.execute("nonexistentId");
    }).rejects.toBeInstanceOf(AppError);
  });
});
