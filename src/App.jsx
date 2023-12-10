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
  <div className='home'>
    <h1>Som l&apos;Associació d&apos;Estudiants de Dades!</h1>
    <h2>Som l&apos;associació estudiantil del <Link href='https://dse.upc.edu'>grau en ciència i enginyeria de dades</Link> de la <Link href='https://upc.edu'>UPC</Link>. Treballem per a ajudar a millorar el grau, crear un vincle entre estudiants i alumni, organitzar activitats com la <Link href='https://datathon.cat'>Datathon FME</Link>, compartir experiències de l&apos;alumnat i promoure l&apos;ecosistema de les dades català, entre moltes altres!</h2>
  </div>
);

function App() {
  return (
    <>
      <TopBar />
      <Home />
    </>
  );
}

export default App;
