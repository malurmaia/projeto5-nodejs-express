const express = require('express');
const router = express.Router();
const CategoryController = require('../controllers/CategoryController')

const categoryCtrl = new CategoryController();
router.get("/",async (req, res) => {
    res.send('Olá mundo user!')

});
router.get("/:id",async (req, res) => {
    res.send('Olá mundo category!')

});
router.post("/:id",async (req, res) => {
    res.send('Olá mundo category')

});
router.patch("/:id",async (req, res) => {
    res.send('Olá mundo category')

});
router.put("/:id",async (req, res) => {
    res.send('Olá mundo category')

});
router.delete("/:id",async (req, res) => {
    res.send('Olá mundo category')

});
 module.exports = router;