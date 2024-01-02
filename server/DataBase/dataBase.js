const mongoose = require('mongoose');

const uri = 'mongodb://127.0.0.1:27017/MyCasinoStatApp';

async function dataBaseConnect(){

    await mongoose.connect(uri);
};

module.exports = dataBaseConnect;