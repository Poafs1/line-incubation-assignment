import Layout from '../layouts'
import SendMessage from '../components/chat/v1/sendMessage'
import ReceiveMessage from '../components/chat/v1/receiveMessage'

// Title
const headerTitle = {
  title: '',
  description: ''
}

const Index = () => {
  return(
    <Layout {...headerTitle}>
      {/* Connect Section */}
      
      {/* Chat Section */}
      <section>
        <ReceiveMessage />
      </section>

      {/* Send Message Section */}
      <section>
        <SendMessage />
      </section>
    </Layout>
  )
}

export default Index