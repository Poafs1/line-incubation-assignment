require('dotenv').config()

module.exports = {
    SERVER: {
        HOST: process.env.HOST,
        PORT: process.env.PORT,
        CLIENT_PORT: process.env.CLIENT_PORT
    }
}