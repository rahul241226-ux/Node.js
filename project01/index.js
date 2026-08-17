const express = require("express");
const users = require("./MOCK_DATA.json");

const app = express();
const PORT = 8000;

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

    return res.json({ status: "pending" });

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