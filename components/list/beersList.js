import Link from 'next/link';
import React from 'react';

const BeersList = ({i, isPremium}) => {
  return (
    isPremium ?
      <Link href={`./beers/${i.urlName}`}>
        <a>
          <div className="premium-beers__item">
            <img src={i.url} alt="" />
          </div>
        </a>
      </Link>
      
      :
    <div className="beers__item">
      <Link href={`./beers/${i.urlName}`}>
        <a>
          <img src={i.url} alt="" />
        </a>
      </Link>
    </div>
  );
};

export default BeersList;