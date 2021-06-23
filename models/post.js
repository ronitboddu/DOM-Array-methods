
const mongoose = require('mongoose');
mongoose.set('debug', true);

let postSchema = new mongoose.Schema({
        name : { type: String},
        wealth : {type: String}
    },{collection : 'Wealth'});

let Wealth = module.exports = mongoose.model('Wealth',postSchema);


