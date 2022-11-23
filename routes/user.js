const express = require('express');
const router = express.Router();
const User = require('../controllers/UserController')

const userCtrl = new User();

router.get("/",async (req, res) => {
    
    res.send('Olá mundo user!')

});
router.get("/:id",async (req, res) => {
    res.send('Olá mundo user!')

})
router.post("/:id",async (req, res) => {
    res.send('Olá mundo user!')

});
router.patch("/:id",async (req, res) => {
    res.send('Olá mundo user!')

});
router.put("/:id",async (req, res) => {
    res.send('Olá mundo user!')

});
router.delete("/:id",async (req, res) => {
    res.send('Olá mundo user!')

});
 module.exports = router;