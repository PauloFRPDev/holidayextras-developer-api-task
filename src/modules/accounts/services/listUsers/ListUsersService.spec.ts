import { UsersRepositoryInMemory } from "../../repositories/InMemory/UsersRepositoryInMemory";
import { ListUsersService } from "./ListUsersService";

let usersRepository: UsersRepositoryInMemory;
let listUsersService: ListUsersService;

describe("List Users", () => {
  beforeEach(() => {
    usersRepository = new UsersRepositoryInMemory();
    listUsersService = new ListUsersService(usersRepository);
  });

  it("should be able to list all users", async () => {
    await usersRepository.create({
      email: "test@test.com",
      givenName: "givenTest",
      familyName: "familyTest",
    });

    const users = await listUsersService.execute();

    expect(users.length).toBe(1);
  });
});
