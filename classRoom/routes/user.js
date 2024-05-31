const express = require("express");
const router = express.Router();


//index route for users
router.get("/", (req, res) => {
    res.send("Root is working!");
});

//show user
router.get("/:id", (req, res) => {
    res.send("GET req for show users!");
});
//POST users
router.post("/", (req, res) => {
        res.send("POST for users");
    })
    //DELETE users
router.delete("/:id", (req, res) => {
    res.send("DELETE for users");
})

module.exports = router;