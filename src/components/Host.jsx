import React from 'react';

// Host récupère 1 prop => host
function Host({ host }) {
  const hostSplited = host.name.split(" ");
  const [name, lastname] = hostSplited;

  return (
    <div className="host">
      <div className="host__name">
        <p className="host__name--firstname">{name.trim()}</p>
        <p className="host__name--lastname">{lastname.trim()}</p>
      </div>

      <img src={host.picture} alt="Propriétaire" className="host__picture" />
    </div>
  );
};

export default Host;
