const User = require('./models/user');

async function handleGetAllUsers(req, res) {


    const allDbUsers = await User.find({})

    // res.setHeader("X-MyName", "Rahul sah")
    return res.json(allDbUsers);


}
async function handlegetUserById(req, res) {


    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ error: "user not found" });
    return res.json(user);


}
async function handelUpdateUserById(req, res) {


    await User.findByIdAndUpdate(req.params.id, { last_Name: "changed" })


    return res.json({ status: "success" });



}


async function handelDeleteUserById(req, res) {

    await User.findByIdAndDelete(req.params.id);

    return res.json({ status: "success" });;



}

async function handelCreateNewUser(req, res) {


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


        first_Name: body.first_name,
        last_Name: body.last_name,
        email: body.email,
        gender: body.gender,
        jobTitle: body.job_title,




    })
    // console.log("result", result);
    return res.status(201).json({ msg: "success", id: result._id });



}

module.exports = {

    handleGetAllUsers,
    handlegetUserById,
    handelUpdateUserById,
    handelDeleteUserById,
    handelCreateNewUser,


}