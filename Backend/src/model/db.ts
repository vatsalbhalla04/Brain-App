import mongoose from 'mongoose'; 
const {Schema} = mongoose
const ObjectId = mongoose.Types.ObjectId; 

console.log('Connected To DB');

const UserSchema = new Schema({
    email:{
        type: String, 
        unique: true
    },
    password : {
        type: String, 
        required : true
    }, 
    username : {
        type : String, 
        required : true
    }
}); 

const ContentSchema = new Schema({
    title: {
        type : String, 
        required : true, 
    },
    link:{
        type : String, 
        required : true, 
    } , 
    tags: [{type : ObjectId , ref :'Tag' }],   
    userId : {
        type: ObjectId, 
        ref: 'user', 
        required : true
    },
});
const TagSchema = new Schema({
    title: {
        type : String, 
        required : true, 
        unique : true
    }
}); 

const LinkSchema = new Schema({
    hash : String, 
}); 

export const userModel = mongoose.model("user",UserSchema); 
export const contentModel = mongoose.model("content", ContentSchema); 
export const tagModel = mongoose.model("tag",TagSchema); 
export const linkModel = mongoose.model("link",LinkSchema); 

