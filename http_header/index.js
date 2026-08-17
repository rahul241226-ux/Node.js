const express = require("express");
const fs = require('fs')
const users = require("./MOCK_DATA.json");

const app = express();
const PORT = 8000;


app.use(express.urlencoded({ extended: false }));
app.use((req, res, next) => {


    fs.appendFile(

        "log.txt", `\n{$Date.now()}: ${req.ip} ${req.method}: ${req.path}`, (err, data) => {

            next();

        }

    )
    // console.log("hello from middleware 1");
    // req.MyuserName = "rahulsah@.com"
    // return res.json({mgs: "hello from middleware 1"});


})




app.use((req, res, next) => {

    console.log("hello from middleware 2");
    //db query
    //crredit info
    // req.creditcardnumber="45"
    // return res.json({mgs: "hello from middleware 1"});
    return res.end("hey");
})




//Routes
// GET API - HTML
app.get("/users", (req, res) => {
    const html = `
        <ul>
            ${users.map((user) => `<li>${user.first_name}</li>`).join("")}
        </ul>
    `;

    res.send(html);
});

// REST API - Get all users
app.get("/api/users", (req, res) => {
    res.setHeader("MyName", "Rahul sah");// custom header// Always add X to custom header
    return res.json(users);
});

// REST API - Get user by ID
app.get("/api/users/:id", (req, res) => {

    const id = Number(req.params.id);

    const user = users.find((user) => user.id === id);

    return res.json(user);
});

app.post('/api/users', (req, res) => {

    // create new users
    const body = req.body;
    console.log("body", body);
    users.push({ ...body, id: users.length + 1 });
    fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {


        return res.json({ status: "success", id: users.length + 1 });

    })

})



app.patch('/api/users/:id', (req, res) => {

    // edit the user with id

    return res.json({ status: "pending" });
})


app.delete('/api/users/:id', (req, res) => {


    // delete the user with id

    return res.json({ status: "pending" });

})

app.listen(PORT, () => {
    console.log(`Server started at PORT ${PORT}`);
});
