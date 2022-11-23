const express = require('express');
const router = express.Router();

router.get ("/",async (req, res) => {
    res.send('Olá mundo auth!')

});
router.post("/:id",async (req, res) => {
    res.send('Olá mundo auth!')

});
router.patch("/:id",async (req, res) => {
    res.send('Olá mundo auth!')

});
router.put("/:id",async (req, res) => {
    res.send('Olá mundo auth!')

});
router.delete("/:id",async (req, res) => {
    res.send('Olá mundo auth!')

});
 module.exports = router;