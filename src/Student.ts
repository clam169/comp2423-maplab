
import faker from 'faker'

class Student {
  firstName: string = '';
  lastName: string = '';
  location: {latitude: number, longitude: number};

  constructor(firstName: string, lastName: string, location: object) {
    this.firstName = faker.name.firstName(),
    this.lastName = faker.name.lastName(),
    this.location = {latitude: parseInt(faker.address.latitude()), longitude: parseInt(faker.address.longitude()) }
  }
  fullname() {
    return (this.firstName + " " + this.lastName);
  }
}