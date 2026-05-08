import PropTypes from 'prop-types';
import './Home.css';

const Home = ({ t }) => (
  <div className="home-section" id="nosaltres">
    <div className="graph-pattern"></div>

    <div className="home-content">
      <div className="badge">{t.badge}</div>
      <h1 className="hero-title">
        {t.titlePrefix}<br />
        {t.titleMiddle && `${t.titleMiddle} `}
        <span className="highlight-solid">{t.titleHighlight}</span>
      </h1>
      <p className="hero-description">{t.description}</p>
    </div>
  </div>
);

Home.propTypes = {
  t: PropTypes.shape({
    badge: PropTypes.string.isRequired,
    titlePrefix: PropTypes.string.isRequired,
    titleMiddle: PropTypes.string.isRequired,
    titleHighlight: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default Home;
