import { Injectable } from "@angular/core";
import { User } from "./models/user";

@Injectable()
export class ViewStateService {
  public CurrentUser: User = null;
}
