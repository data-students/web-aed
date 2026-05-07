import Link from './Link';
import './Home.css';

const Home = () => (
  <div className='home-section' id='nosaltres'>
    <div className="graph-pattern"></div>

    <div className='home-content'>
      <div className="badge">
        Ciència i Enginyeria de Dades UPC
      </div>
      <h1 className="hero-title">
        Associació d'Estudiants<br/> de <span className="highlight-solid">Dades</span>
      </h1>
      <p className="hero-description">
        Connectant talent, dades i futur.
      </p>
      
    </div>
  </div>
);

export default Home;
