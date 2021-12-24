import React from 'react';

const CarouselItems = ({i}) => {
  return (
    <div className="carousel__item">
      <img src={i.url} />
    </div>
  );
};

export default CarouselItems;