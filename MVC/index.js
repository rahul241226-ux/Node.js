const express = require("express");
const {connectMongoDB} = require("./connection")
// const fs = require("fs")
// const users = require("./MOCK_DATA.json");



// const { log } = require("console");
const userRouter = require('./routes/user')
const {logReqRes}=require("./middleware")
connectMongoDB("mongodb://127.0.0.1:27017/rahul-1").then(()=>{

console.log("MongoDB connected!");


})

const app = express();
const PORT = 8000;



const User= mongoose.model("user",userSchema);
 
app.use(express.urlencoded({ extended: false }));


app.use(logReqRes("log.txt"))


app.use("/user", userRouter);

app.listen(PORT, () => console.log(`server started at Port:${PORT}`));