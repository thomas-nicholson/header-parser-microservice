const router = require('express').Router();

router.get('/', (req, res) => {
    console.log(req.ip);
    console.log(req.socket.remoteAddress);
    let obj = {
        language: req.headers["accept-language"],
        software: req.headers["user-agent"],
        ipAddress: 1,
    };

    res.json(req.headers);
});

module.exports = router;
