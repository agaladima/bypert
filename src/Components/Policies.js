import React from 'react';
import Header from './Header';
import Bottom from './Bottom';

const policies = () => {

  return (
    <div className="">
      <div className="policies-background-image"></div>
      <div className="sub-page-body">
        <h1>Policies</h1>
      </div>
      <div className="lower-body">
        <div className="container markets">
          <h2 className="sub-page-title">Policies</h2>
          <p className="sub-page-description">
            We request that you be very responsive with the Bypert Experts. You will be
            contacted 30 minutes before the Bypert Expert meets with the seller. If you
            do not respond within that 30 minute window, the item will not be inspected.<br /><br />
            They Bypert Expert will send you pictures and a video to make sure the laptop
            is to your satisfaction. You will be required to confirm the purchase via text.
            <b>Once that confirmation is received, your payment method on file will be charged the
            amount of the laptop plus the $24 Bypert fee which covers shipping and insurance.</b> If
            the payment goes through, the item will be purchased and shipped to you within 24 hours.<br /><br />
            If the item arrives in a condition other than what was confirmed with you via
            pictures and video, <b>send it back within one week and receive the price paid for
            the laptop minus a mandatory $15 dispute fee.</b>
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
