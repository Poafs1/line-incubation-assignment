// Import module
const express = require('express')
const expressSession = require('express-session')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const compression = require('compression')
const passport = require('passport')
const configs = require('./configs')
const { SERVER } = configs

// Config express app
app.use(compression())
app.use(cors({
    origin: `${SERVER.HOST}:${SERVER.CLIENT_PORT}`,
    credentials: true
}))
app.use(cookieParser())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(expressSession({ secret: 'my-express-session-secret', resave: true, saveUninitialized: true}));
app.use(passport.initialize());
app.use(passport.session());

// API Routing
const routingPath = './routes'
app.use('/api', require(routingPath))

// RUN APP
app.listen(SERVER.PORT)
console.log(`Server is listening on port: ${SERVER.PORT}`)