import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DonationListComponent } from './donation-list/donation-list.component';
import { DonationsListNeedComponent } from './donations-list-need/donations-list-need.component';
import { DonationsOfferItemsComponent } from './donations-offer-items/donations-offer-items.component';

const routes: Routes = [
  { path: 'Donations/List', component: DonationListComponent },
  { path: 'Donations/ListNeed', component: DonationsListNeedComponent },
  { path: 'Donations/OfferItems', component: DonationsOfferItemsComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
