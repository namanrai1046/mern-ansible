const express = require("express")
const mongoose = require("mongoose")

require("dotenv").config()

const app = express()

const connect = async () => {
    await mongoose.connect(
      "mongodb+srv://ayush:ayush123@cluster0.hwjasjx.mongodb.net/?retryWrites=true&w=majority"
    );
}

module.exports = connect;