const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const userRoute = require('./routes/user');
const authRoute = require('./routes/auth');
const productRoute = require('./routes/product');
const orderRoute = require('./routes/order');

let cors = require("cors");
app.use(cors());

dotenv.config();

mongoose
    .connect(
        process.env.MONGO_URL)
    .then(() => console.log("Successfully connected!"))
    .catch((err) =>
    {
        console.log(err);
    });

app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/orders", orderRoute);

app.listen(process.env.PORT || 5001, () =>
{
    console.log('Server is running at port 5001');
})
