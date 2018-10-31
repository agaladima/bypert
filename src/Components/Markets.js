import React from 'react';
import MarkCarousel from './MarkCarousel';

const markets = () => {

  return (
    <div className="container markets">
      <h2 className="markets-title">Markets we're in</h2>
      <p id="marketExp">Sometimes the best price isn't in your city.
        Sometimes you don't have time to travel to buy something.
        Sometimes you don't feel comfortable dealing with a stranger online.
        <span id="explore"> Explore the best priced electronics from one of the cities we operate in.</span>
        </p>
        <MarkCarousel />
    </div>
  )
}

export default markets;
