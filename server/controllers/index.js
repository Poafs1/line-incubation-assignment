let clients = []
let messages = []

const sendEventsToAll = newMsg => {
  clients.forEach(c => c.res.write(`data: ${newMsg}\n`))
}

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
      'Connection': 'keep-alive',
      'Cache-Control': 'no-cache'
    }
    res.writeHead(200, headers)

    const data = `data: ${JSON.stringify(messages)}\n`
    data.time = new Date()
    res.write(data)

    const clientId = Date.now()
    const newClient = {
      id: clientId,
      res
    }
    clients.push(newClient)
    req.on('close', () => {
      clients = clients.filter(c => c.id !== clientId)
    })
  },

  postMessage: async function(req, res) {
    const newMsg = req.body
    messages.push(newMsg)
    res.json(newMsg)
    return sendEventsToAll(newMsg)
  }
}