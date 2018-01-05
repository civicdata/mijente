import { IUserRepository } from "./user-repository";
import { User } from "../user";

export class MockUserRepository implements IUserRepository {
  private users: User[] = [];

  Add(user: User) {
    // TODO This should return some kind of identifier, so that the client has a handle on the thing they just added.
    this.users.push(user);
  }

  FindByEmail(email: string) {
    const usersWithMatchingEmail = this.users.filter(
      u => u.ContactEmail === email
    );

    if (usersWithMatchingEmail.length === 1) {
      return usersWithMatchingEmail[0];
    } else if (usersWithMatchingEmail.length < 1) {
      throw new Error("Couldn't find user with email: " + email);
    } else {
      throw new Error("Found multiple users with email: " + email);
    }
  }
}
