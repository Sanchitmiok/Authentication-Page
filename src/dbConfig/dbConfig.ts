import mongoose from "mongoose";


export async function connect(){
    try {
        mongoose.connect(process.env.MONGO_URI!);
        const connection = mongoose.connection;

        connection.on('connected' , ()=>{
            console.log("Mongo DB connected");
        })

        connection.on('error', (error)=>{
            console.log("MOngoDB connection error" + error);
            process.exit();
        })
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
}