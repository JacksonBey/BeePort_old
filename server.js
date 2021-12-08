const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./app/models");

const app = express();

var corsOptions = {
  origin: "http://localhost:8000"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));


const Role = db.role;
const User = db.user;
// const { User, Role } = db;

db.sequelize.sync({force: true}).then(() => {
  console.log('Drop and Resync Db');
  initial();
});
// for production use:
// db.sequelize.sync();


// simple route
app.get("/", (req, res) => {
  res.sendFile(__dirname +"/client/views/index.html");
});

app.get("/login", (req, res) => {
  res.sendFile(__dirname +"/client/views/login.html");
});

app.get("/register", (req, res) => {
  res.sendFile(__dirname +"/client/views/register.html");
});


require('./app/routes/auth.routes')(app);
require('./app/routes/user.routes')(app);

// set port, listen for requests
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

//  create 3 rows in database.
// In development, you may need to drop existing tables and re-sync database
// For production, just insert these rows manually and use sync() without parameters to avoid dropping data

function initial() {
  Role.create({
    id: 1,
    name: "user"
  });
 
  Role.create({
    id: 2,
    name: "moderator"
  });
 
  Role.create({
    id: 3,
    name: "admin"
  });

}