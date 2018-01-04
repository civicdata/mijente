export class DonationStatus {

  public static NotFulfilled: DonationStatus = new DonationStatus("Not fulfilled", "red");
  public static PartiallyFulFilled: DonationStatus = new DonationStatus("Partially fulfilled", "yellow");
  public static Fulfilled: DonationStatus = new DonationStatus("Fulfilled", "green");

  public readonly Description: string;
  public readonly UIColor: string;

  constructor(description: string, uiColor: string) {
    this.Description = description;
    this.UIColor = uiColor;
  }

}
