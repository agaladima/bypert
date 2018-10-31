import React from 'react';
import Header from './Header';
import Bottom from './Bottom';

const cities = () => {

  return (
    <div className="">
      <div className="cities-background-image"></div>
      <div className="sub-page-body">
        <h1>Markets we're in</h1>
      </div>
      <div className="lower-body">
        <div className="container markets">
          <h2 className="sub-page-title">Markets we're in</h2>
          <p className="sub-page-description">
            We are currently in Los Angeles County, Orange County, and Washington, DC (metro area)<br /><br />
            If we aren't in a market that you want us to be in, please bear with us and send us and email at ...
          </p>
        </div>
      </div>
      <div className="bottom-body">
        <Bottom />
      </div>
    </div>
  )
}

export default cities;
