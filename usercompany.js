// import faker
const faker = require('@faker-js/faker');

class UserCompany {
    constructor(){
        this._id = faker.datatype.number();
        this.firstName = faker.name.firstName();
        this.lastName = faker.name.lastName();
        this.phoneNumber = faker.phone.phoneNumber();
        this.email = faker.internet.email();
        this.password = faker.internet.password();
        this._company_id = faker.datatype.number();
        this.companyName = faker.company.companyName();
        this.street = faker.address.streetAddress();
        this.city = faker.address.city();
        this.state = faker.address.state();
        this.zipCode = faker.address.zipCode();
        this.country = faker.address.country(); 
    }
}

// if your working with regular node files this is different from react
module.exports = UserCompany