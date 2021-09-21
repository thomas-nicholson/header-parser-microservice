const router = require('express').Router();

router.get('/api/whoami', (req, res) => {
    let obj = {
        language: req.headers["accept-language"],
        software: req.headers["user-agent"],
        ipAddress: req.ip.replace("::ffff:", ""),
    };

    res.json(obj);
});

module.exports = router;
