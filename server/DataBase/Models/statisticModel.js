const mongoose = require('mongoose');

const statisticSchema =new mongoose.Schema({
    provider:String,
    sum : Number,
});
const Statistic = mongoose.model('Statistic',statisticSchema);

module.exports =Statistic;