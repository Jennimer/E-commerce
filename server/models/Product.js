const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema(
    {
        title: { type: String, required: true, unique: true },
        img: { type: String, required: true },
        categories: { type: Array },
        size: [
            {
                productSize: {
                    type: String
                },
                productPrice: {
                    type: Number,

                },
            },
        ],
        color: { type: Array },


    },
    { timestamps: true }                 //createdAt:  Date.now(), required:true
);

module.exports = mongoose.model('Product', ProductSchema);