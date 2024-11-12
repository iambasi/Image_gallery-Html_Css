const mongoose = require('mongoose')
const image_schema = new mongoose.Schema({
    image:{type:String, require:true},
    description :{type:String,require:true}
});
module.exports =  mongoose.model('image',image_schema);