import PropTypes from 'prop-types';

const MissionIcon = ({ icon, title, description }) => (
  <div className='mission-icon'>
    <div className='mission-icon-symbol'>{icon}</div>
    <h4 className='mission-title'>{title}</h4>
    <p className='mission-description'>{description}</p>
  </div>
);
MissionIcon.propTypes = {
  icon: PropTypes.element.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

const Objectius = () => (
  <div className='section' id='objectius'>
    <h2 className='section-title'>Els nostres objectius</h2>
    <div className='mission-grid'>
      <MissionIcon 
        icon={
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
            <path d="M6 12v5c3 3 9 3 12 0v-5"/>
          </svg>
        }
        title="Educació"
        description="Millorar el grau i fer divulgació en ciència de dades i IA"
      />
      <MissionIcon 
        icon={
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
            <circle cx="9" cy="7" r="4"/>
            <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
            <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
          </svg>
        }
        title="Comunitat"
        description="Crear vincles entre estudiants, alumni i professionals"
      />
      <MissionIcon 
        icon={
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
          </svg>
        }
        title="Futur"
        description="Impulsar el futur de l'ecosistema tecnològic català"
      />
    </div>
  </div>
);

export default Objectius;
