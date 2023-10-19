const router = require('express').Router();
const User = require('../models/User');
const CryptoJS = require('crypto-js');
const jwt = require('jsonwebtoken');



router.post('/register', async (req, res) =>
{
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: CryptoJS.AES.encrypt(req.body.password, process.env.PASS_KEY).toString(),

    });

    try
    {
        const user = await newUser.save();
        console.log(user);
        res.status(201).json(user);
    } catch (err)
    {
        res.status(500).json(err);
    }
});

router.post("/login", async (req, res) =>
{
    try
    {
        const user = await User.findOne(
            {
                username: req.body.username
            }
        );

        if (!user)
        {
            return res.status(401).json("Wrong credentials!");
        }
        const hastedPassword = CryptoJS.AES.decrypt(
            user.password,
            process.env.PASS_KEY
        );
        const orgPassword = hastedPassword.toString(CryptoJS.enc.Utf8);


        inputPassword !== req.body.password;
        orgPassword != inputPassword &&
            res.status(401).json("Wrong Password");


        const accessToken = jwt.sign(
            {
                id: user._id,
                isAdmin: user.isAdmin,
            },
            process.env.JWT_KEY, { expiresIn: "8d" }
        );

        const { password, ...others } = user._doc;

        res.status(200).json({ ...others, accessToken }); //200 succesful
    } catch (err)
    {
        res.status(500).json(err)
    }
});

module.exports = router;