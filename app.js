const express = require("express");
const bodyParser = require("body-parser");
const transactionRoutes = require("./Routes/transactionRoutes");
const app = express();
require('dotenv').config();

const PORT = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use("/api", transactionRoutes)
app.listen(PORT, ()=> {
    console.log(`listening on port ${PORT}`)
})