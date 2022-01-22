// import faker
const faker = require('@faker-js/faker');

class Company {
    constructor(){
        this._id = faker.datatype.number();
        this.companyName = faker.company.companyName();
        this.street = faker.address.streetAddress();
        this.city = faker.address.city();
        this.state = faker.address.state();
        this.zipCode = faker.address.zipCode();
        this.country = faker.address.country(); 
    }
}

// if your working with regular node files this is different from react
module.exports = Company