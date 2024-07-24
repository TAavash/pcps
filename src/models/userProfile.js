const mongoose=require('mongoose');
// descturcture Schema from mongoose
const {Schema}=mongoose;

const userProfileSchema=new Schema({
     
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
});


const UserProfile=mongoose.model('UserProfile',userProfileSchema);
module.exports=UserProfile;