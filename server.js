// -- Continuation from your express steps w/ faker in github -- 
// -- Creating Express Server w/ steps. Including FakerJS -- 

// Creating Project:
// - cd into project folder
// - npm init -y 
// - npm install express 
// - npm install @faker-js/faker --save-dev
// - create new file called server.js and follow steps below

// 1.
const express = require('express');

// 2. 
const app = express();

// 3. 
const port = 8000; // Express=8000, React=3000

// 11. Carrying over from express steps file. 
// Use this line when working with faker. Read Fakerjs docs for how to use it.
const faker = require('@faker-js/faker');

// 15. 
const User = require("./user.js");
const Company = require("./company.js");
const UserCompany = require("./usercompany.js");

// 5. If you want to accept a post request from postman or another client you need these lines. 
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// 6. How do we write a Route? // After this step test out Server in Terminal (nodemon server.js)
app.get('/api/test', (req, res) => {
    res.json({message:'express project'})
})

// 9. Lets make a new request for the assignment FakerAPI. Make an object called User with its details. Follow Step 12 Now instead
// 12. We are now using faker.js and will be switching the hardcoded data. The sample object data is in the express steps file.
// 16. Now that you have a class User, disregard step 12. (the uncommented code was from step 12)
// Add a new instance of the class User in res.json (Add res.json(new User()))
app.get("/api/user", (req, res) => {
    //const user = {
        // _id, firstName, lastName, phoneNumber, email, password
    //    _id: 1,
    //    firstName: faker.name.firstName(),
    //    lastName: faker.name.lastName(), 
    //    phoneNumber: faker.phone.phoneNumber(),
    //    email: 'bVirgin@email.com',
    //    password: 'likeavirginmobile'
    //}
    res.json(new User());
})

// 17. Now do the same thing for user in a Company class
app.get("/api/company", (req, res) => {
    res.json(new Company());
})

// 18. Create an api route '/api/user/company' that returns both a new user and a new company
app.get("/api/user/company", (req, res) => {
    res.json(new UserCompany());
})

// 13. Rather than having a single function and just saying get me this user data, we can 
// create a class User in a separate file. The class assembles this information together from random pieces of data.
// All we need to do is send over a new instance of our class in res.json above and the class we do it for us. 

// 14. Add const User = require("./user.js"); to the top of this file.

// 10. Create a new request with the route /api/user to see the sample data from the object user

// 4. 
app.listen(port, () => {
    console.log(`running on port ${port}`);
}) // This is saying: 'Please run this function once you can confirm the server is running'. Not a mandatory thing to do but no reason to not add it.


// 7. Go to postman and make a new Collection called FakerAPI... or whatever you want to name it 
// 8. Make a new request. Create a name for the request and enter the request url. In
// this case 'localhost:8000/api/test' and click send. You should see the message with 'express project'