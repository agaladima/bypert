import React from 'react';
import Header from './Header';
import Markets from './Markets';
import Bottom from './Bottom';

const home = () => {

  return (
    <div className="">
      <div className="background-image"></div>
      <div className="home-body">
        <h1>Feel confident buying used</h1>
        <h3>Secure Craigslist shipping from anywhere</h3>
        <form className="one-row">
          <input className="searchURL" type="text" name="searchURL" placeholder="Paste a Craigslist link here" />
          <span>|</span>
          <input className="maxPrice" type="number" name="maxPrice" placeholder="Max Price" />
          <input type="image" alt="background image" src="https://cdn1.iconfinder.com/data/icons/hawcons/32/698627-icon-111-search-512.png" className="button-search" />
        </form>
      </div>
      <div className="lower-body">
        <Markets />
      </div>
      <div className="bottom-body">
        <Bottom />
      </div>
    </div>
  )
}

export default home;
