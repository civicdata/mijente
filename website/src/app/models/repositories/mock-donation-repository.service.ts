import { Injectable } from "@angular/core";
import { IDonationRepository } from "./donation-repository";
import { DonationNeed } from "../donation-need";
import { DonationStatus } from "../donation-status";
import { DonationOffer } from "../donation-offer";
import { User } from "../user";
import { Organization } from "../organization";
import { DonationItem } from "../donation-item";

@Injectable()
export class MockDonationRepositoryService implements IDonationRepository {
  private allNeeds: DonationNeed[] = [
    new DonationNeed(
      new User(
        "Mijente",
        "User",
        new Organization("Mijente"),
        "test2@example.com",
        "098-765-4321"
      ),
      new DonationItem("Paper towels", "20", "container"),
      DonationStatus.Fulfilled
    ),
    new DonationNeed(
      new User(
        "Some",
        "Volunteer",
        new Organization("Another cash-strapped organization"),
        "test@example.com",
        "123-456-7890"
      ),
      new DonationItem("Clothes", "As many as possible", "Hats"),
      DonationStatus.PartiallyFulfilled
    )
  ];
  private allOffers: DonationOffer[] = [
    new DonationOffer(
      new User(
        "Dewie",
        "Rutty",
        new Organization("Red Cross"),
        "dewie@example.com",
        "234-234-4536"
      ),
      new DonationItem("Clothes", "", "box"),
      10,
      30
    ),
    new DonationOffer(
      new User(
        "Sadie",
        "Langtry",
        new Organization("Humana"),
        "sadie@example.com",
        "654-789-1234"
      ),
      new DonationItem("Clothes", "", "crate"),
      2,
      4
    ),
    new DonationOffer(
      new User(
        "Lorilyn",
        "Roseveare",
        new Organization("Brown-Foreman"),
        "lorilyn@example.com",
        "984-759-6510"
      ),
      new DonationItem("Kitchen supplies", "", "big ol' crate"),
      32,
      40
    ),
    new DonationOffer(
      new User(
        "Parsifal",
        "Lindenstrauss",
        new Organization("Greenpeace"),
        "parsifal@example.com",
        "984-789-5640"
      ),
      new DonationItem("Red t-shirts", "", "shirt"),
      0,
      50
    )
  ];

  AddNeed(need: DonationNeed) {
    if (need === null || need === undefined) {
      throw new Error("Invalid donation need provided.");
    }
    this.allNeeds.push(need);
  }
  GetAllNeeds(): DonationNeed[] {
    return this.allNeeds;
  }

  AddOffer(offer: DonationOffer) {
    if (offer === null || offer === undefined) {
      throw new Error("Invalid donation offer provided.");
    }
    this.allOffers.push(offer);
  }
  GetAllOffers(): DonationOffer[] {
    return this.allOffers;
  }
}
