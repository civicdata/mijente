import { Organization } from "./organization";

export class User {
  FirstName: string;
  LastName: string;

  public get FullName(): string {
    return `${this.LastName}, ${this.FirstName}`;
  }

  Organization: Organization | null;
  ContactEmail: string | null;
  ContactPhone: string | null;

  constructor(
    firstName: string,
    lastName: string,
    organization: Organization | null,
    contactEmail: string | null,
    contactPhone: string | null
  ) {
    this.FirstName = firstName;
    this.LastName = lastName;
    this.Organization = organization;
    this.ContactEmail = contactEmail;
    this.ContactPhone = contactPhone;
  }
}
