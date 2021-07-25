import { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { OpenSeaPort, Network } from 'opensea-js';
import { OrderSide } from 'opensea-js/lib/types';
// import { BigNumber, ethers } from 'ethers';
import Web3 from 'web3'

const infuraEndPoint = 'https://rinkeby.infura.io/v3/755c7e0f797f4ddcbc8c69dffd4d13eb'
const web3Provider = new Web3.providers.HttpProvider(infuraEndPoint)
const web3 = new Web3(web3Provider);
// const provider = new ethers.providers.Web3Provider(web3Provider)
// const provider = new ethers.providers.JsonRpcProvider('https://eth-mainnet.gateway.pokt.network/v1/lb/60fcba442a9c8f00340ceef0', 'homestead');
// const web3Provider = new Web3.providers.HttpProvider('https://eth-mainnet.gateway.pokt.network/v1/lb/60fcba442a9c8f00340ceef0');
// console.log(provider);

const seaport = new OpenSeaPort(web3Provider, {
  networkName: Network.Rinkeby
});

function App() {
  useEffect(() => {
    async function fetchAssets() {
      const {ethereum} = window;
      if (ethereum) {
        try {
          const accounts = await ethereum.request({
            method: 'eth_requestAccounts'
          })
          console.log(accounts)
          if (accounts.length > 0) {
            try {
              const {assets} = await seaport.api.getAssets({order_direction: 'desc'});
              console.log("Assets ===>", assets);
              const asset = assets[16];
              if (assets.length > 0) {
                if (asset.sellOrders && asset.sellOrders.length > 0) {
                  const order = await seaport.api.getOrder({
                    side: OrderSide.Sell,
                    asset_contract_address: asset.tokenAddress,
                    token_id: asset.tokenId,
                  })
                  if (order) {
                    // console.log(order);
                    console.log(order.basePrice.div(1e18).toString());
                    console.log(order.quantity.toString());
                    try {
                      const orderPrice = Number(order.basePrice.div(1e18).toString())
                      const balance = await web3.eth.getBalance(accounts[0]);
                      const amount = Number(balance)
                      if (amount < orderPrice) {
                        console.error('Insufficient funds')
                      }
                      console.log("balance ===>", amount)
                      await seaport.wrapEth({
                        accountAddress: accounts[0],
                        amountInEth: amount
                      })
                      const txHash = await seaport.fulfillOrder({
                        order,
                        accountAddress: accounts[0], // The address of your wallet, which will sign the transaction
                        recipientAddress: '0x122c50216E4FE2C37ec4cd642feE05D8A7c410E8' // The address of the recipient, i.e. the wallet you're purchasing on behalf of
                      })
                      console.log("TX hash", txHash);
                    } catch (err) {
                      console.error(err)
                    }
                  }
                } else {
                  console.error("No sell orders on this asset")
                }
              } else {
                console.error("Empty assets")
              }
              
            } catch (err) {
              console.error(err)
            }
  
          }
          
        } catch (err) {
          console.error(err)
        }
      }


    }
    fetchAssets()
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
