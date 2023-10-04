const ControllerRecipes = require('../controllers/controllerRecipes')
const authentication = require('../middleware/authentication')

const routeRecipes = require('express').Router()

routeRecipes.get('/recipes', ControllerRecipes.renderRecipes)
routeRecipes.get('/recipes/:id', ControllerRecipes.renderRecipesDetail)
routeRecipes.get('/popularRecipes', ControllerRecipes.renderPopularRecipes)
routeRecipes.get('/veggieRecipes', ControllerRecipes.renderVeggieRecipes)
routeRecipes.post('/generate-qr-code', ControllerRecipes.renderRecipesQrCode)

routeRecipes.use(authentication)
routeRecipes.post('/userRecipes', ControllerRecipes.addUserRecipes)
routeRecipes.get('/userRecipes', ControllerRecipes.renderUserRecipes)
routeRecipes.delete('/userRecipes/:id', ControllerRecipes.deleteUserRecipes)


module.exports = routeRecipes