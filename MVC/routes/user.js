const express = require("express");
const { handleGetAllUsers, handleGetUserId, handelUpdateUserById, handelDeleteUserById, handelCreateNewUser } = require("..controllers/user")
const router = express.Router();





router.route("/")
    .get(handleGetAllUsers).post(handelCreateNewUser)

router
    .route("/:id")
    .get(handleGetUserId)
    .patch(handelUpdateUserById)
    .delete(handelDeleteUserById)



module.exports = router;