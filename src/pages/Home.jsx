import React from "react";
import { Link } from 'react-router-dom';

import bannerHome from '../assets/banner-home.png';
import products from '../datas/data.json';
import datasAbout from '../datas/datasAbout';
import HomeBanner from '../components/HomeBanner';
import Thumbnails from "../components/Thumbnails";

const slogan = datasAbout.slogan;

function Home() {
  return (
    <div className="home">
      <div className="home__banner">
        <HomeBanner image={bannerHome} title={slogan}/>
      </div>
      <section className="home__gallery">
        {products.map((product) => {
          return (
            <article key={product.id}>
              <Link to={`/rooms/${product.id}`}>
                <Thumbnails image={product.cover} title={product.title}/>
              </Link>
            </article>
          );
        })}
      </section>
    </div>
  )
};

export default Home;
