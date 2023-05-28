import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {
  ThirdwebProvider,
  metamaskWallet,
  coinbaseWallet,
  walletConnectV1,
  walletConnect,
  safeWallet,
  paperWallet,
  magicLink,
} from "@thirdweb-dev/react";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider
      supportedWallets={[
        metamaskWallet(),
       
      ]}
      activeChain="binance-testnet"
    >
      <Component {...pageProps} />
      </ThirdwebProvider>

     
  )
}

export default MyApp
