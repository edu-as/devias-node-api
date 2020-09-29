const express = require("express");
const routes = express.Router();
// Impotando controller
const ProductController = require("./controllers/ProductController");



//rotas    
routes.get("/products", ProductController.index);
routes.get("/products/:id", ProductController.show);
routes.post("/products", ProductController.store);
routes.put("/products/:id", ProductController.update); 
routes.delete("/products/:id", ProductController.destroy); 
/*(req, res) => {
    Product.create({
        title: "React Natice",
        description: "Build native apps with React",
        url: "http://github.com/facebook/react-native"
    );

    return res.send('Hello Wecome to Devias-node-api developed by Duzão');
});*/

    module.exports = routes;