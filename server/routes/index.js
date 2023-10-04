const router = require('express').Router()
const routeRecipes = require('./routeRecipes')
const routerUser = require('./routeUser')

router.use(routerUser)
router.use(routeRecipes)

module.exports = router