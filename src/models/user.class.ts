export class User {
    firstName: string;
    lastName: string;
    birthDate: number;
    street: string;
    zipCode: number;
    city: string;
    email: string;
    gender: string;

    constructor(obj?: any) {
        this.firstName = obj ? obj.firstname: '';
        this.lastName = obj ? obj.lastName: '';
        this.email = obj ? obj.email: '';
        this.birthDate = obj ? obj.birthDate: '';
        this.street = obj ? obj.street: '';
        this.zipCode = obj ? obj.zipCode: '';
        this.city = obj ? obj.city: '';
        this.gender = obj ? obj.gender: '';
    }

    public toJSON() {
        return {
          firstName: this.firstName,
          lastName: this.lastName,
          email: this.email,
          birthDate: this.birthDate,
          street: this.street,
          zipCode: this.zipCode,
          city: this.city,
          gender: this.gender
        }
    }
}