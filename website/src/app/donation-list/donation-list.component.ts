import { Component, OnInit, Inject } from "@angular/core";
import { DonationOffer } from "../models/donation-offer";
import { Organization } from "../models/organization";
import { DonationNeed } from "../models/donation-need";
import { User } from "../models/user";
import { DonationItem } from "../models/donation-item";
import {
  IDonationRepositoryToken,
  IDonationRepository
} from "../models/repositories/donation-repository";

@Component({
  selector: "app-donation-list",
  templateUrl: "./donation-list.component.html",
  styleUrls: ["./donation-list.component.css"]
})
export class DonationListComponent implements OnInit {
  public DonationNeeds: DonationNeed[];
  public DonationOffers: DonationOffer[];

  constructor(
    @Inject(IDonationRepositoryToken)
    private donationRepository: IDonationRepository
  ) {}

  ngOnInit() {
    this.DonationNeeds = this.donationRepository.GetAllNeeds();
    this.DonationOffers = this.donationRepository.GetAllOffers();
  }
}
