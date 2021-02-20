import styles from './css/ConnectRoom.module.css'
import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'

const ConnectRoom = (props: any) => {
  const [username, setUsername] = useState('')
  const [chatServer, setChatServer] = useState('')

  useEffect(() => {
    if (typeof username == 'undefined') return
    props.getUsernameFunc(username)
  }, [username])
  
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    switch(name) {
      case "setUsername":
        setUsername(value)
        return
      case "setChatServer":
        setChatServer(value)
      default:
        return
    }
  }

  const handleOnClick = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
  }

  return(
    <form className={styles.container}>
      {/* User name */}
      <div className={styles.form}>
        <label>User Name:</label>
        <input
          type="text"
          name="setUsername"
          onChange={handleOnChange}
          value={username}
        />
      </div>

      {/* Chat server */}
      <div className={styles.form}>
        <label>Chat Server:</label>
        <input
          type="text"
          name="setChatServer"
          onChange={handleOnChange}
          value={chatServer}
        />
      </div>

      {/* Connect Button */}
      <div className={styles.button}>
        <button type="submit" onClick={handleOnClick}>Connect</button>
      </div>
    </form>
  )
}

export default ConnectRoom

ConnectRoom.propTypes = {
  getUsernameFunc: PropTypes.func.isRequired
}