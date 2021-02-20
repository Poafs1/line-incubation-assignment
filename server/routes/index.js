const router = require('express-promise-router')()
const controllersPath = '../controllers'
const controllers = require(controllersPath)

// Define route
/**
 * Testing GET method
 */
router.get('/', controllers.hello)
/**
 * Testing POST method
 * @param ping: string must be "ping"
 */
router.post('/pingpong', controllers.pingpong)

/**
 * GET & POST message API for server-send events
 */
router.get('/message', controllers.getMessage)
router.post('/message', controllers.postMessage)

module.exports = router