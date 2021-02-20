import dynamic from 'next/dynamic'
import PropTypes from 'prop-types'
import Head from '../components/layouts/v1/head'
const Nav = dynamic(() => import('../components/layouts/v1/nav'))

const Layout = (props: any) => {
  const { title, description } = props

  return(
    <div>
      <Head title={title} description={description}/>
      <Nav />
      <div>
        {props.children}
      </div>
    </div>
  )
}

export default Layout

Layout.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  children: PropTypes.node.isRequired
}