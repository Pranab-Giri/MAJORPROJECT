const express = require("express");
const router = express.Router();


//index route for post
router.get("/", (req, res) => {
    res.send("Root is working!");
});

//show post
router.get("/:id", (req, res) => {
    res.send("GET req for show users!");
});
//POST post
router.post("/", (req, res) => {
        res.send("POST for users");
    })
    //DELETE post
router.delete("/:id", (req, res) => {
    res.send("DELETE for users");
})

module.exports = router;