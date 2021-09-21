const router = require('express').Router();

router.get('/', (req, res) => {
    console.log(req.ip);
    console.log(req.socket.remoteAddress);
    let obj = {
        language: req.headers["accept-language"],
        software: req.headers["user-agent"],
        ipAddress: req.ip.replace("::ffff:", ""),
    };

    res.json(obj);
});

module.exports = router;
