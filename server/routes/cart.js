const router = require('express').Router();
const Cart = require("../models/Cart");
const { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin } = require('./verifyToken');

//Create
router.post('/', verifyToken, async (req, res) => //User can create
{
    const newCart = new Cart(req.body)
    try
    {
        const savedCart = await newCart.save();
        res.status(200).json(savedCart);
    } catch (err)
    {
        res.status(500).json(err);
    }
});
//Update
router.put("/:id", verifyTokenAndAuthorization, async (req, res) =>
{

    try
    {
        const updatedCart = await Cart.findByIdAndUpdate(req.params.id, {
            $set: req.body
        }, { new: true }
        );  //return new updated product
        res.status(200).json(updatedCart);
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
        await Cart.findByIdAndDelete(req.params.id)
        res.status(200).json("Cart deleted")
    } catch (err)
    {
        res.status(500).json(err)
    }
});
//Get 
router.get("/find/:userId", verifyTokenAndAuthorization, async (req, res) => //everybody can get products
{
    try
    {
        const cart = await Cart.findOne({ userId: req.params.userId }) //

        res.status(200).json(cart);
    } catch (err)
    {
        res.status(500).json(err)
    }
    //Get all
    router.get("/", verifyTokenAndAdmin, async (req, res) =>
    {
        try
        {
            const carts = await Cart.find();
            res.status(200).json(carts);
        } catch (err)
        {
            res.status(500).json(err);
        }
    })
});


module.exports = router;