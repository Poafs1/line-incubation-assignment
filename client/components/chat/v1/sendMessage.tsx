import styles from './css/SendMessage.module.css'
import PropTypes from 'prop-types'
import { useState } from 'react'

const SendMessage = () => {
  const [message, setMessage] = useState('')

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
    console.log(message)
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

SendMessage.propTypes = {}