const express = require('express');
const router = express.Router();
const User = require('../controllers/UserController');
const ProductController = require ('../controllers/ProductController');

productCtrl = new ProductController();

router.get("/",async (req, res) => {
    const userCtrl = new User();
    res.send('Olá mundo product!')

});
router.get("/:id",async (req, res) => {
    res.send('Olá mundo product!')

});
router.post("/:id",async (req, res) => {
    res.send('Olá mundo product!')

});
router.patch("/:id",async (req, res) => {
    res.send('Olá mundo product!')

});
router.put("/:id",async (req, res) => {
    res.send('Olá mundo product!')

});
router.delete("/:id",async (req, res) => {
    res.send('Olá mundo product!')

});
 module.exports = router;