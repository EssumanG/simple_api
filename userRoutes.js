const express = require('express');
const router = express.Router();
const users = require('./rawDatabase')


router.get('/', (req, res) =>{
    res.json({
        "number of users": users.length,
        "data":users
    });
})


router.post('/', (req, res) => {
    console.log(req.body);
    users.push(req.body)
    res.send(`User Created with Is ${users.length}`);
})

router.route("/:id")
    .get((req, res) => {
        console.log(req.user);
        res.json({
            "user id": req.id,
            "data": req.user
        });
    })


router.param('id', (req, res, next, id) =>{
    req.id = id
    req.user = users[id];
    next()
})

module.exports = router;