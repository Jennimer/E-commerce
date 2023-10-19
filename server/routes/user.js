const router = require('express').Router();
const User = require("../models/User");
const { verifyTokenAndAuthorization, verifyTokenAndAdmin } = require('./verifyToken');




//Update
router.put("/:id", verifyTokenAndAuthorization, async (req, res) =>
{
    if (req.body.password)
    {
        req.body.password = CryptoJS.AES.encrypt(
            req.body.password,
            process.env.PASS_KEY
        ).toString();
    }
    try
    {
        const updatedUser = await User.findByIdAndUpdate(req.params.id, {
            $set: req.body
        }, { new: true }
        );  //return new updated user
        res.status(200).json(updatedUser);
    } catch (err)
    {
        res.status(500).json(err)
    }
});

//Delete
router.delete("/:id", verifyTokenAndAuthorization, async (req, res) =>
{
    try
    {
        await User.findByIdAndDelete(req.params.id)
        res.status(200).json("User deleted")
    } catch (err)
    {
        res.status(500).json(err)
    }
});

//Get 
router.get("/find/:id", verifyTokenAndAdmin, async (req, res) => //only admin get users
{
    try
    {
        const user = await User.findById(req.params.id)
        const { password, ...others } = user._doc;

        res.status(200).json(others);
    } catch (err)
    {
        res.status(500).json(err)
    }
});
//Get all
router.get("/", verifyTokenAndAdmin, async (req, res) =>
{
    const query = req.query.new
    try
    {
        const users = query
            ? await User.find().sort({ _id: -1 }).limit(5)
            : await User.find()
        res.status(200).json(users);
    } catch (err)
    {
        res.status(500).json(err)
    }
});
//Get stats
router.get("/stats", verifyTokenAndAdmin, async (req, res) =>
{
    const date = new Date();
    const lastYear = new Date(date.setFullYear(date.getFullYear() - 1)); //latest year
    try
    {
        const data = await User.aggregate([ //mongoDb aggregate
            { $macth: { createdAt: { $gte: lastYear } } }, //condition (greater than last year)
            {
                $project: {
                    month: { $month: "$createdAt" }, //take the month from the inside my created add 
                },
            },
            {
                $group: { //Group users
                    _id: "$month",
                    total: { $sum: 1 }
                }
            }
        ]);
        res.status(200).json(data);
    } catch (err)
    {
        res.status(500).json(err);
    }
});
module.exports = router;