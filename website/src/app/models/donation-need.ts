import { Organization } from "./organization";
import { User } from "./user";
import { DonationItem } from "./donation-item";
import { DonationStatus } from "./donation-status";

export class DonationNeed {

    User: User;
    Item: DonationItem;
    Status: DonationStatus;

    constructor(user: User, item: DonationItem, status: DonationStatus) {
        this.User = user;
        this.Item = item;
        this.Status = status;
    }

}
