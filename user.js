// import faker
const faker = require('@faker-js/faker');

class User {
    constructor(){
        this._id = faker.datatype.number();
        this.firstName = faker.name.firstName();
        this.lastName = faker.name.lastName();
        this.phoneNumber = faker.phone.phoneNumber();
        this.email = faker.internet.email();
        this.password = faker.internet.password();
    }
}

// if your working with regular node files this is different from react
module.exports = User