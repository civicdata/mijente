import { Component, OnInit, ViewChild, Inject } from "@angular/core";
import { IDonationRepository, IDonationRepositoryToken } from "../donation-repository";
import { DonationNeed } from "../models/donation-need";
import { User } from "../models/user";
import { DonationItem } from "../models/donation-item";
import { DonationStatus } from "../models/donation-status";
import { Organization } from "../models/organization";

@Component({
  selector: "app-donations-list-need",
  templateUrl: "./donations-list-need.component.html",
  styleUrls: ["./donations-list-need.component.css"]
})
export class DonationsListNeedComponent {

  constructor(@Inject(IDonationRepositoryToken)
              private donationRepository: IDonationRepository) { }

  public onSubmit(formValue: any) {
    const donationNeed = new DonationNeed(
      new User(formValue.firstNameInput,
               formValue.lastNameInput,
               new Organization(formValue.organizationInput)),
      new DonationItem(formValue.itemInput, formValue.itemQuantityInput, formValue.itemUnitsInput),
      DonationStatus.NotFulfilled
    );

    this.donationRepository.AddNeed(donationNeed);

    // TODO Use these fields rather than ignore them.
    // console.log("Contact email: " + formValue.contactEmailInput);
    // console.log("Contact phone: " + formValue.contactPhoneInput);
  }

}
