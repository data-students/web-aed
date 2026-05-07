import PropTypes from 'prop-types';

const TeamMember = ({ name, role, photo, linkedin }) => (
  <div className="team-member">
    <a href={linkedin} target="_blank" rel="noopener noreferrer">
      {photo ? (
        <img src={photo} className="member-img" />
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
  linkedin: PropTypes.string,
};

const Team = () => {
  const members = [
    { name: "Laia Mogas", role: "Presidenta", linkedin: "https://www.linkedin.com/in/laia-mogas-pladevall/", photo: "team/laia mogas.jfif" },
    { name: "Noa Mediavilla", role: "Secretària", linkedin: "https://www.linkedin.com/in/noa-mediavilla/", photo: "team/noa mediavilla.jfif" }, 
    { name: "Arnau Biosca", role: "Tresorer", linkedin: "https://www.linkedin.com/in/arnau-biosca-p%C3%A9rez-57254429b/", photo: "team/arnau biosca.jfif" },
    { name: "Sílvia Fàbregas", role: "Vocal", linkedin: "https://www.linkedin.com/in/s%C3%ADlvia-f-688699229/", photo: "team/silvia fabregas.jfif" },
    { name: "Roberto Nsoni", role: "Director Datathon", linkedin: "https://www.linkedin.com/in/roberto-nsoni/", photo: "team/roberto nsoni.jfif" },
    { name: "Pau Milà", role: "Director DataTalks", linkedin: "https://www.linkedin.com/in/paumilapuig/", photo: "team/pau mila.jfif" },
    { name: "Laura Rebollo", role: "Directora Comunicació", linkedin: "https://www.linkedin.com/in/laurarebollocrespo", photo: "team/laura rebollo.jpg" },
  ];

  return (
    <div className='section' id='equip'>
      <h2 className='section-title'>El nostre equip</h2>
      <div className='team-grid'>
        {members.map((member, index) => (
          <TeamMember key={index} {...member} />
        ))}
      </div>
    </div>
  );
};

export default Team;
