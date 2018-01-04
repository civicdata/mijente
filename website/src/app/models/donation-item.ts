export class DonationItem {
  Name: string;
  // TODO Really, the desired quantity is a higher-level concept...that should go into a DonationNeed class...which has a DonationItem and a DesiredQuantity.
  // TODO The desired quantity should be a class. Options would be: a specific quantity, as many as possible, <= some value, etc.
  DesiredQuantity: string;
  UnitDescription: string;

  constructor(name: string, desiredQuantity: string, unitDescription: string) {
    this.Name = name;
    this.DesiredQuantity = desiredQuantity;
    this.UnitDescription = unitDescription;
  }
}
