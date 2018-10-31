import React from 'react';
import Header from './Header';
import Bottom from './Bottom';

const about = () => {

  return (
    <div className="">
      <div className="about-background-image"></div>
      <div className="sub-page-body">
        <h1>How Bypert Works</h1>
      </div>
      <div className="lower-body">
        <div className="container markets">
          <h2 className="sub-page-title">How Bypert Works</h2>
          <p className="sub-page-description">We currently support Craigslist and operate in 3 markets in the
                            US: Los Angeles, Orange County, and Washington, DC.<br /><br />
                            Follow the steps to register an account on Bypert. Search for
                            laptops in any of the three markets. If you find something you
                            like, submit the link through your account on bypert.com. You
                            will hear from us shortly as we search for a Bypert Expert to
                            handle your order. Wait at most 24 hours while we contact the
                            seller and send you our inspection along with pictures and videos.
                            If you like the laptop, we will charge your account on file, purchase
                            the laptop, and ship it to you within 24 hours. <b>*Get a $50 voucher
                            when you recommend 5 friends that buy something using Bypert.</b>
            </p>
            <br /><br />
            <h2 className="sub-page-title">About Bypert</h2>
            <p className="sub-page-description">Bypert is the best way to buy used laptops online. Most of us
                                                have heard of or lived horror stories of buying used products
                                                online. It’s truly devastating, especially if you’re on a budget.<br /><br />
                                                We’ve found that the best way to buy a used laptop is to check it out yourself.
                                                But what if the best price isn’t in your city or you’re not a self-proclaimed techie?<br /><br />
                                                At Bypert, we are trying to restore trust in what we are calling the Recycle
                                                Economy. We know that some people just want to be more economical or even more
                                                environmentally conscious when the buy, so we created a solution. Instead of a
                                                laptop ending up unused or in a landfill, we want to make sure we open up local
                                                economies to the world and help people get great things while minimizing waste in the
                                                process.
              </p>
        </div>
      </div>
      <div className="bottom-body">
        <Bottom />
      </div>
    </div>
  )
}

export default about;
