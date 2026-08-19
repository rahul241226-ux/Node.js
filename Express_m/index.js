const express = require("express");
const fs = require("fs")
const users = require("./MOCK_DATA.json");
const mongoose = require("mongoose");
// const { log } = require("console");


const app = express();
const PORT = 8000;

//connection
mongoose.connect("mongodb://127.0.0.1:27017/rahul-1")
.then(()=>console.log("MongoDB connected"))
.catch((err)=> console.log("Mongo error",err));


//schema

const userSchema= new mongoose.Schema({

first_Name:{
type:String,
required:true,

},

last_Name:{
type:String,



},

email:{


type:String,
required:true,
unique:true,
},

jobTitle:{

type:String,

},
gender:{

type:String,


},


},{timestamps:true})// it track created and updated 


const User= mongoose.model("user",userSchema);
 
app.use(express.urlencoded({ extended: false }));


app.use((req, res, next) => {

fs.appendFile(
    "log.txt",
    `${Date.now()} : ${req.ip} ${req.method}: ${req.path}\n`,
    (err) => {
        next();
}
);

})



app.get("/users", async (req, res) => {
    const allDbUsers = await User.find({});

    const html = `
        <ul>
            ${allDbUsers
                .map((user) => `<li>${user.first_Name} - ${user.email}</li>`)
                .join("")}
        </ul>
    `;

    res.send(html);
});


app.get("/api/users", async(req, res) => {
 const allDbUsers = await User.find({})

    // res.setHeader("X-MyName", "Rahul sah")
    return res.json(allDbUsers);

})

app.route("/api/users/:id")
    .get(async(req, res) => {

        const user= await User.findById(req.params.id);
        // const id = Number(req.params.id);
        // const user = users.find((user) => user.id == id);
        if (!user) return res.status(404).json({ error: "user not found" });
        return res.json(user);



    })

    .patch(async(req, res) => {
         await User.findByIdAndUpdate(req.params.id,{last_Name:"changed"})


        return res.json({ status: "success" });

    })


    .delete(async(req, res) => {
        await User.findByIdAndDelete(req.params.id);

        return res.json({ status: "success" });;

    })


app.post("/api/users", async(req, res) => {

    const body = req.body;
    if (

        !body || !body.first_name || !body.last_name || !body.email || !body.gender ||
        !body.job_title

    ) {


        return res.status(400).json({ msg: "all fields are req..." })


    }

    // users.push({ ...body, id: users.length + 1 });
    // fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {

    //     return res.status(201).json({ status: "success", id: users.length });

    // })

const result = await User.create({


first_Name:body.first_name,
last_Name:body.last_name,
email:body.email,
gender:body.gender,
jobTitle:body.job_title,




})
// console.log("result", result);
return res.status(201).json({msg:"success"});
})

app.listen(PORT, () => console.log(`server started at Port:${PORT}`));