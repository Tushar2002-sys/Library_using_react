const mongoose=require("mongoose")
mongoose.connect("mongodb+srv://Mongo_Tushar1972:9cO87pTmcdXZLsXh@mycluster1972.ddlh1.mongodb.net/")
.then(()=>{
    console.log("mongodb connected");
})
.catch(()=>{
    console.log('failed');
})


const newSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

const collection = mongoose.model("collection",newSchema)

module.exports=collection
