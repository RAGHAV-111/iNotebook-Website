const mongoose = require('mongoose');

const mongoURI = 'mongodb://127.0.0.1:27017/inotebook?readPreference=primary&ssl=false&directConnection=true';

const connectToMongo = async () => {
    try {
        await mongoose.connect(mongoURI);
        console.log("Connected Successfully");
    }
    catch (error) {
        console.log('error' + error.message);
    }
};

module.exports = connectToMongo;
