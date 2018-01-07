import { InjectionToken } from "@angular/core";
import { User } from "../user";

export let IUserRepositoryToken = new InjectionToken("./donation-repository");

export interface IUserRepository {
  Add(user: User);
  FindByEmail(email: string);
}
