// Import the built-in http module
const express = require('express');
const path = require("path");
const mongoose = require('mongoose');

// Set the hostname and port
const app = express();
const port = 3000;

app.engine('html', require('ejs').renderFile); // You can use EJS, Mustache, etc.
app.set('view engine', 'html');
app.set("../public", path.join(process.cwd(), "../public"));
app.use(express.static(path.join(__dirname, "../public")));

app.get("/", (req, res) => {
    res.render("index");
})

app.listen(port, () => {
    console.log(`Server running at http://localHost:${port}`);
})