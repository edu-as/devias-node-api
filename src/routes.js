const express = require("express");
const routes = express.Router();
// Impotando controller
const ProductController = require("./controllers/ProductController");



//primeira rota*    
routes.get("/products", ProductController.index);
/*(req, res) => {
    Product.create({
        title: "React Natice",
        description: "Build native apps with React",
        url: "http://github.com/facebook/react-native"
    );

    return res.send('Hello Wecome to Devias-node-api developed by Duzão');
});*/

module.exports = routes;