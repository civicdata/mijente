import {
  Component,
  OnInit,
  ChangeDetectorRef,
  ViewChild,
  Inject
} from "@angular/core";
import { ViewStateService } from "../view-state-service.service";
import { DonationOffer } from "../models/donation-offer";
import { DonationItem } from "../models/donation-item";
import {
  IDonationRepositoryToken,
  IDonationRepository
} from "../models/repositories/donation-repository";

@Component({
  selector: "app-donations-offer-items",
  templateUrl: "./donations-offer-items.component.html",
  styleUrls: ["./donations-offer-items.component.css"]
})
export class DonationsOfferItemsComponent implements OnInit {
  @ViewChild("offerItemsForm") offerItemsForm;

  // TODO IMPORTANT It looks like binding to an array of objects is going to be a big problem.
  //                Instead, we'll have a dynamic set of components.

  // TODO This should be an array of DonationItem objects.
  public donationItems: object[] = [];

  constructor(
    @Inject(IDonationRepositoryToken)
    private donationRepository: IDonationRepository,
    public viewStateService: ViewStateService
  ) {}

  ngOnInit() {}

  public onAddItemClick(event) {
    this.donationItems.push({
      index: this.donationItems.length,
      description: ""
    });
    this.offerItemsForm.form.updateValueAndValidity();
  }

  public onDeleteItemClick(event, donationItemIndex: number) {
    //const controlName: string = `item-${donationItemIndex}`;
    //this.offerItemsForm.form.removeControl(controlName);

    this.donationItems.splice(donationItemIndex, 1);

    let index: number = 0;
    for (let donationItem of this.donationItems) {
      (donationItem as any).index = index;
      index++;
    }

    this.offerItemsForm.form.updateValueAndValidity();
  }

  public onSubmit(formValue: any) {
    console.log(this.offerItemsForm);
    console.log(this.offerItemsForm.form.controls);

    const offer: DonationOffer = new DonationOffer(
      this.viewStateService.CurrentUser,
      new DonationItem(
        formValue.donationDescriptionInput,
        "10",
        formValue.donationDescriptionInput
      ),
      0,
      10
    );

    this.donationRepository.AddOffer(offer);
  }
}
