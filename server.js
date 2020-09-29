const express = require("express");
const app = express();
const faker = require('faker');


class User {
    constructor() {
        this._id = faker.random.uuid();
        this.firstName = faker.name.firstName();
        this.lastName = faker.name.lastName();
        this.phoneNumber = faker.phone.phoneNumber();
        this.email = faker.internet.email();
        this.password = faker.internet.password();
    }
}

class Company {
    constructor(){
        this._id = faker.random.uuid();
        this.name = faker.company.companyName();
        this.address = faker.address.streetAddress();
        this.address = faker.address.city();
        this.address = faker.address.state();
        this.address = faker.address.zipCode();
        this.address = faker.address.country();
    }
}

app.get("/api/users/new" , (req,res) => {
    const users = [
        new User()
    ]
    return res.json({Users:users})
})

app.get("/api/companies/new" , (req,res) => {
    const companies = [
        new Company ()
    ]
    return res.json({Companies:companies})
})

app.get("/api/user/company" , (req,res) => {
    const both = [
        new User(),
        new Company()
    ]
    return res.json({Accounts:both})
})

const server = app.listen(8000, () =>
console.log(`server is locked on ${server.address().port}`))