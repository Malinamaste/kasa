import React from "react";

// HomeBanner récupère 2 props => image & title
function HomeBanner({ image, title }) {
  return (
    <div className="hbanner">
      <img src={image} alt="" className="hbanner__img" />
      <div className="hbanner__overlay"></div>
      <h2 className="hbanner__title">{title}</h2>
    </div>
  )
};

export default HomeBanner;
