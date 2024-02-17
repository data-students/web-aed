import PropTypes from 'prop-types';

import TopBar from './TopBar';
import './App.css';

const Link = ({ href, children }) => (
  <a href={href} target='blank' rel='noopener'>{children}</a>
);
Link.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};


const Home = () => (
  <div className='section' id='nosaltres'>
    <h1>Som l&apos;Associació d&apos;Estudiants de Dades!</h1>
    <h2>Som l&apos;associació estudiantil del <Link href='https://dse.upc.edu'>grau en ciència i enginyeria de dades</Link> de la <Link href='https://upc.edu'>UPC</Link>. Treballem per a ajudar a millorar el grau, crear un vincle entre estudiants i alumni, organitzar activitats com la <Link href='https://datathon.cat'>Datathon FME</Link>, compartir experiències de l&apos;alumnat i promoure l&apos;ecosistema de les dades català, entre moltes altres!</h2>
  </div>
);


const Card = ({ title, img, text, button_text = 'Més informació', href }) => (
  <div className='card'>
    <img src={img} alt={title} />
    <div className='card-content'>
      <div>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
      <a className='button' href={href} target='blank' rel='noopener' >{button_text}</a>
    </div>
  </div>
);
Card.propTypes = {
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  button_text: PropTypes.string,
  href: PropTypes.string,
};

const Projects = () => (
  <div className='section' id='projectes'>
    <h2 className='subtitle'>Els nostres projectes</h2>
    <div className='grid'>
      <Card
        title='Datathon FME'
        img='datathon.webp'
        text='La datató més gran de Catalunya. Un esdeveniment de 30 hores on els equips resolen reptes reals amb ciència de dades i IA.'
        button_text='Lloc web oficial'
        href='https://datathon.cat'
      />
      <Card
        title='Data Days'
        img='data-days.webp'
        text='Un cicle de xerrades, tallers i activitats al voltant de la ciència i enginyeria de dades. Per a estudiants de tots els nivells i professionals!'
        button_text='Aviat...'
      />
      <Card
        title='Apunts Dades'
        img='apunts.webp'
        text='Un recull d&apos;apunts i exàmens de les assignatures del nostre grau. Amb una plataforma col·laborativa on preguntar i resoldre dubtes.'
        button_text='Entra-hi!'
        href='https://apunts.aed.cat'
      />
      <Card
        title='Plataforma virtual'
        img='alumni-mes.webp'
        text='Administrem un club en línea a la plataforma UPC AlumniMés, on compartir experiències i ofertes de feina per a la comunitat.'
        button_text="Apunta-t'hi!"
        href='https://alumnimes.upc.edu/groups/30/feed'
      />
    </div>
  </div>
);

const JoinUs = () => (
  <div className='section' id='unir-se'>
    <h2 className='subtitle'>Vols unir-te?</h2>
    <div className='grid'>
      <div className='grid-text'>
        <h3>Si ets estudiant o <i>alumni</i> del grau en ciència i enginyeria de dades de la UPC, pots unir-te a l&apos;associació!</h3>
        <p>És completament gratuït!</p>
        <p>Si vols col·laborar activament, escriu-nos a <Link href='mailto:hola@aed.cat'>hola@aed.cat</Link>! Estem oberts a noves idees!
        </p>
      </div>
      <a className='button'>Em vull unir!</a>
    </div>
  </div >
);

const Footer = () => (
  <div className='section footer'>
    <ul>
      <li><Link href='mailto:hola@aed.cat'>hola@aed.cat</Link></li>
      <li></li>
      <li><Link href='https://instagram.com/datastudents'>Instagram</Link></li>
      <li><Link href='https://linkedin.com/company/data-students'>LinkedIn</Link></li>
      <li><Link href='https://youtube.com/@datastudents'>YouTube</Link></li>
      <li><Link href='https://twitter.com/datastudents'>X (Twitter)</Link></li>
    </ul>
    <p>© 2024 Associació d&apos;Estudiants de Dades</p>
  </div>
);

function App() {
  return (
    <>
      <TopBar />
      <Home />
      <Projects />
      <JoinUs />
      <Footer />
    </>
  );
}

export default App;
