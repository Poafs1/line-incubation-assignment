import styles from './css/SendMessage.module.css'
import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
import { HOST, PORT } from '../../../configs'
import fetch from 'node-fetch'

const domain = `${HOST}:${PORT}/api`

const SendMessage = (props: any) => {
  const { username } = props
  const [message, setMessage] = useState('')
  const [name, setName] = useState('')

  useEffect(() => {
    if (typeof username == 'undefined') return
    setName(username)
  }, [username])

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    switch(name) {
      case "setMessage":
        setMessage(value)
        return
      default:
        return
    }
  }

  const handleOnClick = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    if (typeof name == 'undefined' || name == '') return
    if (typeof message == 'undefined' || message == '') return
    const payload = {
      user: name,
      message: message
    }
    const res = await fetch(`${domain}/message`, {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {'Content-Type': 'application/json'}
    })
    if (res.status != 200) {
      console.log('Seem something went wrong. Please try again.')
    }
    return
  }
  
  return(
    <div className={styles.container}>
      <form className={styles.form}>
        {/* Type Input */}
        <input
          type="text"
          name="setMessage"
          placeholder="Sending something..."
          onChange={handleOnChange}
          value={message}
        />
        {/* Send */}
        <button type="submit" onClick={handleOnClick}>Send</button>
      </form>
    </div>
  )
}

export default SendMessage

SendMessage.propTypes = {
  username: PropTypes.string.isRequired
}