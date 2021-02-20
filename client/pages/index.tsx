import Layout from '../layouts'
import ConnectRoom from '../components/chat/v1/connectRoom'
import SendMessage from '../components/chat/v1/sendMessage'
import ReceiveMessage from '../components/chat/v1/receiveMessage'
import { useState } from 'react'

// Title
const headerTitle = {
  title: '',
  description: ''
}

const Index = () => {
  const [username, setUsername] = useState('')

  const handleGetUsername = (name: string) => {
    if (typeof name == 'undefined') return
    setUsername(name)
  }

  return(
    <Layout {...headerTitle}>
      {/* Connect Section */}
      <section>
        <ConnectRoom getUsernameFunc={handleGetUsername}/>
      </section>
      
      {/* Chat Section */}
      <section>
        <ReceiveMessage />
      </section>

      {/* Send Message Section */}
      <section>
        <SendMessage username={username}/>
      </section>
    </Layout>
  )
}

export default Index