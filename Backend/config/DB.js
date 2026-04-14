import mongoose from "mongoose";

const DBCN=async()=>{
    try{
        await mongoose.connect('mongodb+srv://kanhaiya:kanhaiya@cluster0.xyphol7.mongodb.net/')
            console.log("database connected")
        
    }catch(e){
        console.log("database connect nhi hua hai ye error hai:",e)
    }
}
export default DBCN