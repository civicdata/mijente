import { OpaqueToken } from "@angular/core";
import { User } from "../user";

export let IUserRepositoryToken = new OpaqueToken("./donation-repository");

export interface IUserRepository {
  Add(user: User);
  FindByEmail(email: string);
}
