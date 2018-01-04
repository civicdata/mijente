import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { DonationListComponent } from "./donation-list/donation-list.component";
import { DonationsListNeedComponent } from "./donations-list-need/donations-list-need.component";
import { DonationsOfferItemsComponent } from "./donations-offer-items/donations-offer-items.component";
import { AppRoutingModule } from "./app-routing.module";
import { DonationItemComponent } from "./donation-item/donation-item.component";
import { IDonationRepository, IDonationRepositoryToken } from "./donation-repository";
import { MockDonationRepositoryService } from "./mock-donation-repository.service";
import { OpaqueToken } from "@angular/core";

@NgModule({
  declarations: [
    AppComponent,
    DonationListComponent,
    DonationsListNeedComponent,
    DonationsOfferItemsComponent,
    DonationItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    { provide: IDonationRepositoryToken, useClass: MockDonationRepositoryService }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
