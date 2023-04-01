import React from 'react';

// Thumbnails récupère 2 props => image & title
function Thumbnails({ image, title }) {
  return (
    <div className="thumb">
      <img src={image} alt="" className="thumb__img" />
      <div className="thumb__overlay"></div>
      <h2 className="thumb__title">{title}</h2>
    </div>
  )
};

export default Thumbnails;
