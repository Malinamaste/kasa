import React from 'react';
import arrow from '../assets/arrow.png';

// Collapse récupère 2 props => title & content
function Collapse({ title, content }) {
  const isCollapse = (e) => {
    e.preventDefault();
    const divText = e.target.nextSibling;
    const arrow = e.target.lastChild;

    if (!divText.classList.contains("show")) {
      divText.classList.add("show");
      arrow.classList.add("rotate");
    } else {
      divText.classList.remove("show");
      arrow.classList.remove("rotate");
    }
  };

  return (
    <div className="collapse">
      <button type="button" className="collapse__button" onClick={isCollapse}>
        {title}
        <img src={arrow} alt="" className="collapse__arrow"/>
      </button>

      <div className="collapse__content">
        {Array.isArray(content) ? (
          // Pour les listes d'équipements des appartements
          <ul className="collapse__list">
            {content.map((equipment, index) => (
              <li key={index} className="collapse__list-element">
                {equipment}
              </li>
            ))}
          </ul>
        ) : (
          // Pour toutes les autres descriptions
          <p className="collapse__text">{content}</p>
        )}
      </div>
    </div>
  );
};

export default Collapse;
