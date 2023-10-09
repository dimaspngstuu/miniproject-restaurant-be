const express = require("express")
const menuController= require("../controllers/menuController")
const router = express.Router()

router.get('/menus',menuController.getAll)
router.post('/menus',  menuController.create)
router.get('/menus/:id',menuController.getById)
router.put('/menus/:id', menuController.updateData)
router.delete('/menus/:id', menuController.deleteData)

module.exports = router
