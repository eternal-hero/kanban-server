const mongoose = require("mongoose");
require('dotenv').config();
try {
    mongoose.connect(process.env.NODE_ENV_MONGODB_DEV);
    console.log('Database Connected!')
} catch (error) {
    handleError(error);
}
