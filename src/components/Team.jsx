import PropTypes from 'prop-types';

const TeamMember = ({ name, role, photo, linkedin }) => (
  <div className="team-member">
    <a href={linkedin} target="_blank" rel="noopener noreferrer" aria-label={name}>
      {photo ? (
        <img src={photo} className="member-img" alt={name} />
      ) : (
        <div className="member-img placeholder-bg"></div>
      )}
    </a>
    <h4 className="member-name">{name}</h4>
    <p className="member-role">{role}</p>
  </div>
);
TeamMember.propTypes = {
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  photo: PropTypes.string,
  linkedin: PropTypes.string.isRequired,
};

const Team = ({ t }) => (
  <div className="section" id="equip">
    <h2 className="section-title">{t.title}</h2>
    <div className="team-grid">
      {t.members.map((member) => (
        <TeamMember key={member.linkedin} {...member} />
      ))}
    </div>
  </div>
);

Team.propTypes = {
  t: PropTypes.shape({
    title: PropTypes.string.isRequired,
    members: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
      role: PropTypes.string.isRequired,
      photo: PropTypes.string,
      linkedin: PropTypes.string.isRequired,
    })).isRequired,
  }).isRequired,
};

export default Team;
