import { Link } from 'react-router-dom';

function Error() {
  return (
    <section className='error'>
      <div className='error__info'>
        <span className='error__number'>404</span>
        <h1 className='error__text'>
          Oups! La page que vous demandez n'existe pas.
        </h1>
      </div>
      <Link to="/" className='error__link'>
        Retourner sur la page d’accueil
      </Link>
    </section>
  );
};

export default Error;
