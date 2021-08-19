import { v4 as uuidV4 } from "uuid";

class User {
  id?: string;

  email: string;

  givenName: string;

  familyName: string;

  created: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { User };
