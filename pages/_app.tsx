import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { MoralisProvider } from "react-moralis";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MoralisProvider 
      appId="R3ZVwya1uXZszmo8vOYs8ul5yo4UVLG0f06sfVTv"
      serverUrl="https://kcceuztnjtuf.usemoralis.com:2053/server"
    >
      <Component {...pageProps} />
    </MoralisProvider>
    )
}

export default MyApp
