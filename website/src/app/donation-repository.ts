import { DonationNeed } from "./models/donation-need";
import { DonationOffer } from "./models/donation-offer";
import { OpaqueToken } from "@angular/core";

export let IDonationRepositoryToken = new OpaqueToken("./donation-repository");

export interface IDonationRepository {

  AddNeed(need: DonationNeed);
  GetAllNeeds(): DonationNeed[];

  GetAllOffers(): DonationOffer[];

}
