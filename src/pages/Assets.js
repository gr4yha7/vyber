import React, { useEffect, useState } from 'react';
import { OpenSeaPort, Network } from 'opensea-js';
import {  ethers } from 'ethers';
import Navbar from '../components/Navbar';
import "./assets.css";
// import Web3 from 'web3'
const GatewayID = '60fcba442a9c8f00340ceef0';
// const provider = new ethers.providers.JsonRpcProvider('https://eth-mainnet.gateway.pokt.network/v1/lb/60fcba442a9c8f00340ceef0', 'homestead');
const provider = new ethers.providers.PocketProvider('homestead', GatewayID)

const seaport = new OpenSeaPort(provider, {
  networkName: Network.Main
});

const Assets = () => {
  const [assets, setAssets] = useState([]);
  const [assetCount, setAssetCount] = useState(0);

  useEffect(() => {
    async function fetchAssets() {
      try {
        const { assets, estimatedCount } = await seaport.api.getAssets({order_direction: 'desc'});
        console.log("Assets ===>", assets);
        if (assets.length > 0) {
          setAssets(assets);
          setAssetCount(estimatedCount);
        }
      } catch (err) {
        console.error(err)
      }
    }

    fetchAssets();
  }, []);

  return (
    <>
      <Navbar />
      <div className="assets-container">
        <div className="assets-main">
          <div className="assets-view">
            <div className="assets-wrapper">
              {
                assets && assets.length > 0 ? (
                  assets.map((asset, idx) => (
                    <div className="block" key={idx}>
                      <article className="block-item">
                        <a className="linker">
                          <div className="inner">
                            <div className="media">

                            </div>
                          </div>
                        </a>
                      </article>
                    </div>
                  ))
                ) : (
                  <p>No assets loaded</p>
                )
              }
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Assets;