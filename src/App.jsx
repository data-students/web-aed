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

const JoinUs = () => (
  <div className='section' id='unir-se'>
    <h2 className='subtitle'>Vols unir-te?</h2>
    <div className='grid'>
      <div className='grid-text'>
        <h3>Si ets estudiant o <i>alumni</i> del grau en ciència i enginyeria de dades de la UPC, pots unir-te a l&apos;associació!</h3>
        <p>És completament gratuit! També pots seguir-nos a les nostres xarxes socials per estar al dia de les nostres activitats!</p>
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
      <JoinUs />
      <Footer />
    </>
  );
}

export default App;
