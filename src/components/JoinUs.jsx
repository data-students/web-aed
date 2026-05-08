import PropTypes from 'prop-types';
import Contact from './Contact';

const JoinUs = ({ t, contactTexts }) => (
  <div className="section" id="unir-se">
    <h2 className="section-title">{t.title}</h2>
    <div className="grid">
      <div className="grid-text">
        <h4>{t.studentText}</h4>
        <h4>{t.collaborationText}</h4>
      </div>
    </div>
    <Contact t={contactTexts} />
  </div>
);

JoinUs.propTypes = {
  t: PropTypes.shape({
    title: PropTypes.string.isRequired,
    studentText: PropTypes.string.isRequired,
    collaborationText: PropTypes.string.isRequired,
  }).isRequired,
  contactTexts: PropTypes.object.isRequired,
};

export default JoinUs;
