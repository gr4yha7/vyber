import { useEffect } from 'react';
import { OpenSeaPort, Network } from 'opensea-js';
import { OrderSide } from 'opensea-js/lib/types';
import {  ethers } from 'ethers';
// import Web3 from 'web3'
const GatewayID = '60fcba442a9c8f00340ceef0';
// const infuraEndPoint = 'https://rinkeby.infura.io/v3/755c7e0f797f4ddcbc8c69dffd4d13eb'
// const web3Provider = new Web3.providers.HttpProvider(infuraEndPoint)
// const provider = new ethers.providers.Web3Provider(web3Provider)
// const provider = new ethers.providers.JsonRpcProvider('https://eth-mainnet.gateway.pokt.network/v1/lb/60fcba442a9c8f00340ceef0', 'homestead');
const provider = new ethers.providers.PocketProvider('homestead', GatewayID)
// const web3Provider = new Web3.providers.HttpProvider('https://eth-mainnet.gateway.pokt.network/v1/lb/60fcba442a9c8f00340ceef0');
// const web3 = new Web3(web3Provider);
// console.log(provider);


const seaport = new OpenSeaPort(provider, {
  networkName: Network.Main
});

function SendAsset() {
  useEffect(() => {
    async function fetchAssets() {
      const {ethereum} = window;
      if (ethereum) {
        try {
          await ethereum.request({
            method: 'eth_requestAccounts'
          })
          console.log(provider.apiKey)
          console.log(provider.applicationId)
          console.log(provider.applicationSecretKey)
          
          const signer = provider.getSigner()
          console.log(signer)
          const accounts = await provider.listAccounts()
          console.log(accounts)
          // if (accts.length > 0) {
            try {
              const {assets} = await seaport.api.getAssets({order_direction: 'desc'});
              console.log("Assets ===>", assets);
              const asset = assets[7];
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
                      // const orderPrice = Number(order.basePrice.div(1e18).toString())
                      const accounts = await provider.getBlockNumber()
                      console.log(accounts)
                      // const balance = await provider.getBalance(accounts[0])
                      // console.log(balance);
                      // const balanceInEther = ethers.utils.formatEther(balance);
                      // console.log(balanceInEther);
                      // const amount = Number(balanceInEther)
                      // if (amount < orderPrice) {
                      //   console.error('Insufficient funds')
                      // }
                      // console.log("balance ===>", amount)
                      // await seaport.wrapEth({
                      //   accountAddress: accounts[0],
                      //   amountInEth: amount
                      // })
                      // const txHash = await seaport.fulfillOrder({
                      //   order,
                      //   accountAddress: accounts[0], // The address of your wallet, which will sign the transaction
                      //   recipientAddress: '0x122c50216E4FE2C37ec4cd642feE05D8A7c410E8' // The address of the recipient, i.e. the wallet you're purchasing on behalf of
                      // })
                      // console.log("TX hash", txHash);
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
  
          // }
          
        } catch (err) {
          console.error(err)
        }
      }


    }
    fetchAssets()
  }, [])

  return (
    <div className="">
      <h2>Send Asset</h2>
    </div>
  );
}

export default SendAsset;
