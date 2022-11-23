const express = require('express');
const router = express.Router();
const CategoryController = require('../controllers/CategoryController')

const categoryCtrl = new CategoryController();
router.get("/",async (req, res) => {
    const result = await categoryCtrl.getCategories(req.query);
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
    await categoryCtrl.updateCategory(req.params.id, {})
    res.send('Dados alterados com sucesso')

});
router.delete("/:id",async (req, res) => {
   await categoryCtrl.deleteCategory(req.params.id);
    res.send('Categoria deletada com sucesso')

});
 module.exports = router;