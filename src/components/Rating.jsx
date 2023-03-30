import redStar from '../assets/redStar.svg';
import greyStar from '../assets/greyStar.svg';

// Rating récupère 1 prop => rating
function Rating({ rating }) {
  const stars = [ 1, 2, 3, 4, 5 ];

  return (
    <div className="rating">
      {/* on boucle pour afficher les étoiles en fonction des notes accordées */}
      {stars.map((star) =>
        rating >= star ? (
          <img
            key={star.toString()}
            className="rating__star"
            src={redStar}
            alt="étoile rouge"
          />
        ) : (
          <img 
            key={star.toString()}
            className="rating__star"
            src={greyStar}
            alt="étoile grise"
          />
        )
      )}
    </div>
  );
};

export default Rating;
