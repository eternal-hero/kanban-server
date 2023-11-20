const express = require("express");
const { newTicket, getData, updateTicket } = require("../controller/ticket-controller.js");
const ticketRouter = express.Router();

ticketRouter.post("/add", newTicket);
ticketRouter.get('/getData', getData);
ticketRouter.post('/updateTicket', updateTicket);

module.exports = ticketRouter;