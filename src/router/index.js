const express = require("express")
const menuController= require("../controllers/menuController")
const customerController = require("../controllers/customerController")
const categoriesController = require("../controllers/categoriesControllers")
const orderControllers = require("../controllers/orderControllers")
require("../controllers/orderControllers")
const router = express.Router()


//Route for table menus
router.get('/menus',menuController.getAll)
router.post('/menus',menuController.create)
router.get('/menus/:id',menuController.getById)
router.put('/menus/:id',menuController.updateData)
router.delete('/menus/:id',menuController.deleteData)



//routes for table customers
router.get("/customers",customerController.getAll);
router.post("/customers",customerController.create);
router.get("/customers/:id",customerController.getById);
router.put("/customers/:id",customerController.update);
router.delete("/customers/:id",customerController.delete);
router.delete("/customers/",customerController.clearAllData);


//routes for table categories
router.get("/categories", categoriesController.getAll)
router.post("/categories", categoriesController.create)
router.get("/categories/:id", categoriesController.getById)
router.put("/categories/:id", categoriesController.updateCategories)
router.delete("/categories/:id", categoriesController.deleteById)


//routes for table orders
router.get("/orders",orderControllers.getAll)
router.post("/orders/create",orderControllers.create)

module.exports = router
