import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useEffect } from 'react'

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const nextDiv = document.getElementById("__next")

    if (nextDiv !== null) {
      nextDiv.id = "app";
    }
  }, []);

  return <Component {...pageProps} />
}
export default MyApp
