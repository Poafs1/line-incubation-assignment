import styles from './css/ReceiveMessage.module.css'
import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
import { HOST, PORT } from '../../../configs'

const ReceiveMessage = () => {
  const [messages, setMessages] = useState([])
  const [listening, setListening] = useState(false)

  useEffect(() => {
    if (!listening) {
      const events = new EventSource(`${HOST}:${PORT}/api/get/message`)
      events.onmessage = event => {
        const parsedData = JSON.parse(event.data)
        setMessages(messages => messages.concat(parsedData))
      }
      setListening(true)
    }
  }, [listening, messages])

  console.log(messages)

  return(
    <div className={styles.container}>
      <div>
        {messages.map((msg, i) => (
          <div><p>{msg.text}</p></div>
        ))}
      </div>
    </div>
  )
}

export default ReceiveMessage

ReceiveMessage.propTypes = {}