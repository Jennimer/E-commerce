const router = require('express').Router();
const Product = require("../models/Product");
const { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin } = require('./verifyToken');

//Create
router.post('/', verifyTokenAndAdmin, async (req, res) =>
{
    const newProduct = new Product(req.body)
    try
    {
        const savedProduct = await newProduct.save();
        res.status(200).json(savedProduct);
    } catch (err)
    {
        res.status(500).json(err);
    }
});

//Update
router.put("/:id", verifyTokenAndAdmin, async (req, res) =>
{

    try
    {
        const updatedProduct = await Product.findByIdAndUpdate(req.params.id, {
            $set: req.body
        }, { new: true }
        );  //return new updated product
        res.status(200).json(updatedProduct);
    } catch (err)
    {
        res.status(500).json(err)
    }
});

//Delete
router.delete("/:id", verifyTokenAndAdmin, async (req, res) =>
{
    try
    {
        await Product.findByIdAndDelete(req.params.id)
        res.status(200).json("Product deleted")
    } catch (err)
    {
        res.status(500).json(err)
    }
});

//Get 
router.get("/find/:id", async (req, res) => //everybody can get products
{
    try
    {
        const product = await Product.findById(req.params.id)

        res.status(200).json(product);
    } catch (err)
    {
        res.status(500).json(err)
    }
});
//Get all
router.get("/", async (req, res) =>
{
    const queryNew = req.query.new
    const queryCategory = req.query.category;
    try
    {
        let products;
        if (queryNew)
        {
            products = await Product.find().sort({ createdAt: -1 }).limit(1);
        } else if (queryCategory)
        {
            products = await Product.find({
                categories: {
                    $in: [queryCategory],
                },
            });
        } else
        {
            products = await Product.find();
        }
        res.status(200).json(products);
    } catch (err)
    {
        res.status(500).json(err)
    }
});

module.exports = router;