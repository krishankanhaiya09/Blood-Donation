import mongoose from "mongoose";

const DBCN=async()=>{
    try{
        await mongoose.connect('mongodb://localhost:27017/Blood-Donation')
            console.log("database connected")
        
    }catch(e){
        console.log("database connect nhi hua hai ye error hai:",e)
    }
}
export default DBCN