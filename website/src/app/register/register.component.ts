import { Component, OnInit, Inject } from "@angular/core";
import { User } from "../models/user";
import { Organization } from "../models/organization";
import {
  IUserRepositoryToken,
  IUserRepository
} from "../models/repositories/user-repository";
import { ViewStateService } from "../view-state-service.service";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent {
  constructor(
    @Inject(IUserRepositoryToken) private userRepository: IUserRepository,
    private viewStateService: ViewStateService
  ) {}

  public onSubmit(formValue: any) {
    const newUser = new User(
      formValue.firstNameInput,
      formValue.lastNameInput,
      new Organization(formValue.organizationInput),
      formValue.contactEmailInput,
      formValue.contactPhoneInput
    );

    console.log(newUser);
    console.log(JSON.stringify(newUser));

    this.userRepository.Add(newUser);

    const user = this.userRepository.FindByEmail(newUser.ContactEmail);
    this.viewStateService.CurrentUser = user;
    // viewStateService.CurrentUser = userRepository.FindByEmail(newUser.email);
  }
}
