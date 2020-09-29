// Importando mongoose
const mongoose = require("mongoose");
// Criando model 
const Product = mongoose.model("Product");

module.exports = {
    //  request get
    async index(req, res) {
        const { page = 1 } = req.query;
        const products = await Product.paginate({}, { page, limit:10 });
        return res.json(products);
    },
    //request get 
    async show(req, res) {
        const product = await Product.findById(req.params.id);
        return res.json(product);
    },
    // request post
    async store(req, res) {
        const product = await Product.create(req.body);        
        return res.json(product);
    },
    // request put
    async update(req, res) {
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        });
        return res.json(product);
    },
    // request delete 
    async destroy(req, res) {
        await Product.findByIdAndRemove(req.params.id);
        return res.send();
    },
};
    