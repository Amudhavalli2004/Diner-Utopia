const mongoose = require("mongoose");

var mongoURL='mongodb+srv://Amudhavalli:Amudha7!@cluster0.ixhhqss.mongodb.net/diner-utopia';
mongoose.connect(mongoURL, {useUnifiedTopology:true, useNewUrlParser:true});

var db=mongoose.connection;
db.on('connected', ()=>{
    console.log('MongoDB connection successful');
})

db.on('error', () =>{
    console.log('MongoDB connection failed');
})

module.exports=mongoose;
