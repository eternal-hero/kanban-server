const express = require("express");
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

//Importing the MongoDB
require('./config/db.js');
require('dotenv').config();

//Importing the Routes
const ticketRouter = require("./routes/ticket-routes.js");

app.use(cors());
app.set("view engine", "ejs");
app.use(express.json());
app.use(
    bodyParser.json()
);
app.use(
    bodyParser.text({ type: '/' })
);
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);
app.use(express.static('public'));
app.use("/api/tickets", ticketRouter);

app.listen(5000, () => console.log("Test server is runing at  5000..."));