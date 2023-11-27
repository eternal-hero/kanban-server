const Ticket = require("../model/tickets");

const newTicket = async (req, res, next) => {
    const { title, tags, startDate, endDate } = req.body;
    const ticket = new Ticket({
        title,
        tags,
        startDate,
        endDate,
        status: 1,
        position: 0,
        updatedAt: new Date(),
    });
    try {
        ticket.save();
        return res.status(200).json({ message: 'success' })
    }
    catch (e) { console.log(e); }
}

const getData = async (req, res, next) => {
    const query = Ticket.find().sort({ updatedAt: -1 });
    query.then((data) => {
        return res.status(200).json({ data });
    }).catch((err) => {
        console.log(err);
    });
}

const updateTicket = async (req, res, next) => {
    const targetId = req.body.targetId;
    const containerData = req.body.containerData;
    containerData.map(async (data, index) => {
        const filter = { _id: data._id };
        const update = {
            status: targetId,
            position: index + 1,
        };
        await Ticket.findByIdAndUpdate(filter, update);
    })
}

module.exports = { newTicket, getData, updateTicket };