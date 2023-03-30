import imgBanner from '../assets/about_banner.png';
import datasAbout from '../datas/datasAbout';
import Collapse from '../components/Collapse';
import HomeBanner from '../components/HomeBanner';

function About() {
  const content = (title) => {
    switch (title) {
      case "fiability":
        return datasAbout.fiability;
      case "respect":
        return datasAbout.respect;
      case "service":
        return datasAbout.service;
      case "security":
        return datasAbout.security;
      default:
        console.log("default");
        break;
    }
  };

  return (
    <section className="about">
      <HomeBanner image={imgBanner} />
      <div className="about__dropdowns">
        <Collapse title="Fiabilité" content={content("fiability")} />
        <Collapse title="Respect" content={content("respect")} />
        <Collapse title="Service" content={content("service")} />
        <Collapse title="Sécurité" content={content("security")} />
      </div>
    </section>
  );
};

export default About;
