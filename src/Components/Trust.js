import React from 'react';
import Header from './Header';
import Bottom from './Bottom';

const trust = () => {

  return (
    <div className="">
      <div className="trust-background-image"></div>
      <div className="sub-page-body">
        <h1>Trust & Security</h1>
      </div>
      <div className="lower-body">
        <div className="container markets">
          <h2 className="sub-page-title">Trust & Security</h2>
          <p className="sub-page-description">
              We want to provide the best experience possible, which is why we maintain
              constant communication with you through the process.<br /><br />
              We also insure your products in the event that they are lost, damaged, or stolen.
          </p>
        </div>
      </div>
      <div className="bottom-body">
        <Bottom />
      </div>
    </div>
  )
}

export default trust;
