import React from 'react';
import Header from './Header';
import Bottom from './Bottom';

const policies = () => {

  return (
    <div className="">
      <div className="contact-background-image"></div>
      <div className="sub-page-body">
        <h1>Contact Us</h1>
      </div>
      <div className="lower-body">
        <div className="container markets">
          <h2 className="sub-page-title">Contact Us</h2>
          <p className="sub-page-description">
            At Bypert, we are committed to creating the absolute best experience. In an effort
            of continued improvement, we welcome all correspondence you might have. Please direct
            your emails here: ...
          </p>
        </div>
      </div>
      <div className="bottom-body">
        <Bottom />
      </div>
    </div>
  )
}

export default policies;
