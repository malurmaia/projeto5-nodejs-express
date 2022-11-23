const express = require('express');
const db = require('./db.js')
const app = express();

require("dotenv").config();

db.sync(()=> console.log("banco rodando"))
// ROTAS //
 const user = require('./routes/user');
 const auth = require('./routes/auth');
 const product = require('./routes/product');
 const category = require('./routes/category');


app.use("/user", user);
app.use("/auth", auth);
app.use("/product", product);
app.use("/category", category);

app.listen(process.env.PORT, function() {
    console.log("app rodando")
})