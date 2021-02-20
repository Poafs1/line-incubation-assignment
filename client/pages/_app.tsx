import type { AppProps /*, AppContext */ } from 'next/app'
require('../styles/index.css')

function MyApp({ Component, pageProps }: AppProps) {
  return(
    <Component {...pageProps}/>
  )
}

export default MyApp