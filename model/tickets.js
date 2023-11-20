const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ticketSchema = new Schema({
    title: {
        type: String,
    },
    tags: {
        type: Object,
        required: true,
    },
    startDate: {
        type: String,
        required: true,
    },
    endDate: {
        type: String,
        required: true,
    },
    status: {
        type: Number,
        required: true,
    },
    position: {
        type: Number,
        required: true,
    },
    updatedAt: {
        type: Date,
        required: true,
    }
})

module.exports = mongoose.model("ticket", ticketSchema);