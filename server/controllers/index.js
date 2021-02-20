module.exports = {
  hello: async function(req, res) {
    return res.status(200).json({ "text": "Hello, World!" })
  },

  pingpong: async function(req, res) {
    // Get request from body
    const { ping } = req.body

    // Handle undefined req.body.ping
    if (typeof ping == 'undefined') {
      return res.status(400).json({ "text": "error" })
    }

    // Check request text is equal to "ping" or not
    if (ping.toLowerCase() != 'ping') {
      return res.status(400).json({ "text": "error" })
    }

    // Return text pong! to client
    return res.status(200).json({ "text": "pong!" })
  },

  getMessage: async function(req, res, next) {
    const headers = {
      'Content-Type': 'text/event-stream',
      'Connection': 'keep-alive'
    }
  },

  postMessage: async function(req, res) {

  }
}