import { DonationNeed } from "../donation-need";
import { DonationOffer } from "../donation-offer";
import { InjectionToken } from "@angular/core";

export let IDonationRepositoryToken = new InjectionToken(
  "./donation-repository"
);

export interface IDonationRepository {
  AddNeed(need: DonationNeed);
  GetAllNeeds(): DonationNeed[];

  AddOffer(offer: DonationOffer);
  GetAllOffers(): DonationOffer[];
}
