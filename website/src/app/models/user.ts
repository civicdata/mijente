import { Organization } from "./organization";

export class User {
    FirstName: string;
    LastName: string;

    public get FullName(): string {
      return `${this.LastName}, ${this.FirstName}`;
    }

    Organization: Organization | null;

    constructor(firstName: string,
                lastName: string,
                organization: Organization | null) {
        this.FirstName = firstName;
        this.LastName = lastName;
        this.Organization = organization;
    }
}
