import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

const Home = () => {
  return (
    <>
      <Header />
      <main className="w-100">
        <div className="main-wrap mx-auto wrapper">
          <div className="wrapper-y maxwidth-xl mx-auto will-grow">
            <h2 className="tx-c maxwidth-sl mx-auto">Send NFTs and Semi-Fungible Tokens as gifts to friends and loved ones</h2>
            {/* <p className="smalltext tx-c maxwidth-sm mx-auto mt-2"></p> */}
          </div>
          <div className="wrapper-y maxwidth-xl mx-auto will-grow">
            <Link to="/assets">
              <button className="bg-primary co-white microtext tx-c">Explore Marketplace</button>
            </Link>
          </div>
        </div>
      </main>
    </>
  )
}

export default Home;