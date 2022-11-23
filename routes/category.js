const express = require('express');
const router = express.Router();
const CategoryController = require('../controllers/CategoryController')

const categoryCtrl = new CategoryController();
router.get("/",async (req, res) => {
    const result = await categoryCtrl.getCategories();
    res.send(result)

});
router.get("/:id",async (req, res) => {
    const result = await categoryCtrl.getCategory();
    res.send(result)

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