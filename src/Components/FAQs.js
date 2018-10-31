import React from 'react';
import Header from './Header';
import Bottom from './Bottom';

const faqs = () => {

  return (
    <div className="">
      <div className="faqs-background-image"></div>
      <div className="sub-page-body">
        <h1>Frequently Asked Questions</h1>
      </div>
      <div className="lower-body">
        <div className="container markets">
          <h2 className="sub-page-title">FAQs</h2>
          <p className="sub-page-description">
            <b>What do Bypert fees cover?</b><br />
            The fees you pay cover parts of our costs as well as shipping and insurance.
            <br /><br />
            <b>How long does it take to get my product?</b><br />
            We use standard ground shipping with USPS, so it should take 5 to 10 business days.
            <br /><br />
            <b>Can I expedite my shipping?</b><br />
            Yes. You will be charged more for overnight shipping.
            <br /><br />
            <b>How are the laptops shipped?</b><br />
            We’ve experimented (yes, like the egg drop test) and have found the best way to package your item so that it gets to you intact.
            <br /><br />
            <b>Can I buy something outside of the markets you’re in?</b><br />
            Unfortunately not. But, if you have a special case, please contact us and we will try our best to help you. We are growing and adding more Markets, so if we see trends in certain markets, we’ll make that a priority.
          </p>
        </div>
      </div>
      <div className="bottom-body">
        <Bottom />
      </div>
    </div>
  )
}

export default faqs;
