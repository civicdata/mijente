import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { DonationListComponent } from "./donation-list/donation-list.component";
import { DonationsListNeedComponent } from "./donations-list-need/donations-list-need.component";
import { DonationsOfferItemsComponent } from "./donations-offer-items/donations-offer-items.component";
import { AppRoutingModule } from "./app-routing.module";
import { DonationItemComponent } from "./donation-item/donation-item.component";
import {
  IDonationRepository,
  IDonationRepositoryToken
} from "./models/repositories/donation-repository";
import { MockDonationRepositoryService } from "./models/repositories/mock-donation-repository.service";
import { OpaqueToken } from "@angular/core";
import { RegisterComponent } from "./register/register.component";
import { IUserRepositoryToken } from "./models/repositories/user-repository";
import { MockUserRepository } from "./models/repositories/mock-user-repository";
import { ViewStateService } from "./view-state-service.service";

@NgModule({
  declarations: [
    AppComponent,
    DonationListComponent,
    DonationsListNeedComponent,
    DonationsOfferItemsComponent,
    DonationItemComponent,
    RegisterComponent
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  providers: [
    {
      provide: IDonationRepositoryToken,
      useClass: MockDonationRepositoryService
    },
    {
      provide: IUserRepositoryToken,
      useClass: MockUserRepository
    },
    ViewStateService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
