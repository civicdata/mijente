import { User } from "./user";
import { DonationItem } from "./donation-item";

export class DonationOffer {
    User: User;
    Item: DonationItem;
    ClaimedQuantity: number;
    TotalQuantity: number;

    public get AvailableQuantity(): number {
      return this.TotalQuantity - this.ClaimedQuantity;
    }

    constructor(user: User,
                item: DonationItem,
                claimedQuantity: number,
                totalQuantity: number) {
        this.User = user;
        this.Item = item;
        this.ClaimedQuantity = claimedQuantity;
        this.TotalQuantity = totalQuantity;
    }
}
