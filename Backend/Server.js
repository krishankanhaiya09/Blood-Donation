import express from 'express'
import DBCN from './config/DB.js'
import User from './models/User.js'
import router from './routes/auth.routes.js'
import cors from "cors"
const port=8500
const app=express()
app.use(express.json())
app.use(cors())
DBCN()

app.use("/api/auth", router)


app.listen(port,()=>{
console.log("Server running on:",port)
})