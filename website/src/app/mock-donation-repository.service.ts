import { Injectable } from "@angular/core";
import { IDonationRepository } from "./donation-repository";
import { DonationNeed } from "./models/donation-need";
import { DonationStatus } from "./models/donation-status";
import { DonationOffer } from "./models/donation-offer";
import { User } from "./models/user";
import { Organization } from "./models/organization";
import { DonationItem } from "./models/donation-item";

@Injectable()
export class MockDonationRepositoryService implements IDonationRepository {

  private allNeeds: DonationNeed[] = [
    new DonationNeed(new User("Mijente", "User", new Organization("Mijente")), new DonationItem("Paper towels", "20", "container"), DonationStatus.Fulfilled),
    new DonationNeed(new User("Some", "Volunteer", new Organization("Another cash-strapped organization")), new DonationItem("Clothes", "As many as possible", "Hats"), DonationStatus.PartiallyFulFilled)
  ];

  constructor() { }

  AddNeed(need: DonationNeed) {
    this.allNeeds.push(need);
  }

  GetAllNeeds(): DonationNeed[] {
    return this.allNeeds;
  }

  GetAllOffers(): DonationOffer[] {
    return [
      new DonationOffer(new User("Dewie", "Rutty", new Organization("Red Cross")), new DonationItem("Clothes", "", "box"), 10, 30),
      new DonationOffer(new User("Sadie", "Langtry", new Organization("Humana")), new DonationItem("Clothes", "", "crate"), 2, 4),
      new DonationOffer(new User("Lorilyn", "Roseveare", new Organization("Brown-Foreman")), new DonationItem("Kitchen supplies", "", "big ol' crate"), 32, 40),
      new DonationOffer(new User("Parsifal", "Lindenstrauss", new Organization("Greenpeace")), new DonationItem("Red t-shirts", "", "shirt"), 0, 50)
    ];
  }
}
