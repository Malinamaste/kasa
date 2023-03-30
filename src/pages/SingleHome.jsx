import { useParams } from "react-router-dom";
import products from '../datas/data.json';

// on importe les composants
import Collapse from '../components/Collapse';
import Rating from '../components/Rating';
import Slideshow from '../components/Slideshow';
import Tags from '../components/Tags';
import Host from '../components/Host';

import Error from '../pages/Error';

function SingleHome() {
  // on récupère l'id dans l'URL
  const { id } = useParams();
  // on récupère le logement associé à l'id de l'URL
  const product = products.find((product) => product.id === id);

  const { title, location, rating, host, equipments, description, pictures } =
    product;

  if (!product) {
    return <Error />;
  }

  return (
    <section className="singleproduct">
      <Slideshow slides={pictures} />
      <div className="singleproduct__content">
        <div className="singleproduct__informations">
          <h1 className="singleproduct__title">{title}</h1>
          <p className="singleproduct__location">{location}</p>
          <div className="singleproduct__tags">
            {product.tags.map((tag, index) => (
              <Tags key={index} getTags={tag} />
            ))}
          </div>
        </div>
        <div className="singleproduct__rating-and-host">
          <Host host={host} />
          <Rating rating={rating} />
        </div>
      </div>
      <div className="singleproduct__dropdowns">
        <Collapse title="Description" content={description} />
        <Collapse title="Équipements" content={equipments} />
      </div>
    </section>
  );
};

export default SingleHome;
