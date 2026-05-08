import PropTypes from 'prop-types';
import './Projects.css';

const ProjectRow = ({ title, img, text, buttonText, href, buttonText2, href2, reverse, imageFit = 'cover' }) => (
  <div className={`project-row ${reverse ? 'reverse' : ''}`}>
    <div className="project-image-container">
      <img src={img} alt={title} className="project-image" style={{ objectFit: imageFit, padding: imageFit === 'contain' ? '0.2rem' : '0' }} />
    </div>
    <div className="project-content">
      <h3 className="project-title">{title}</h3>
      <p className="project-text">{text}</p>
      <div className="project-actions">
        <a className="project-btn" href={href} target="_blank" rel="noopener noreferrer">
          {buttonText}
        </a>
        {buttonText2 && href2 && (
          <a className="project-btn project-btn-secondary" href={href2} target="_blank" rel="noopener noreferrer">
            {buttonText2}
          </a>
        )}
      </div>
    </div>
  </div>
);

ProjectRow.propTypes = {
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  buttonText2: PropTypes.string,
  href2: PropTypes.string,
  reverse: PropTypes.bool,
  imageFit: PropTypes.oneOf(['cover', 'contain']),
};

const Projects = ({ t }) => (
  <div className="projects-section" id="projectes">
    <div className="projects-container">
      <h2 className="section-title">{t.title}</h2>

      <div className="projects-list">
        <ProjectRow
          title={t.items.datathon.title}
          img="datathon.webp"
          text={t.items.datathon.text}
          buttonText={t.learnMore}
          href="https://datathon.cat"
          reverse={false}
        />
        <ProjectRow
          title={t.items.dataTalks.title}
          img="dataTalks.svg"
          text={t.items.dataTalks.text}
          buttonText={t.learnMore}
          href="https://luma.com/data-talks"
          buttonText2={t.videos}
          href2="https://www.youtube.com/playlist?list=PL0PIFoo8yCbjjiyfYopBpNXaf-T47_Abx"
          reverse
          imageFit="contain"
        />
        <ProjectRow
          title={t.items.apunts.title}
          img="apunts.webp"
          text={t.items.apunts.text}
          buttonText={t.learnMore}
          href="https://apuntsdades.com"
          reverse={false}
        />
        <ProjectRow
          title={t.items.dataDays.title}
          img="data-days.webp"
          text={t.items.dataDays.text}
          buttonText={t.learnMore}
          href="https://datadays.aed.cat"
          reverse
        />
      </div>
    </div>
  </div>
);

Projects.propTypes = {
  t: PropTypes.shape({
    title: PropTypes.string.isRequired,
    learnMore: PropTypes.string.isRequired,
    videos: PropTypes.string.isRequired,
    items: PropTypes.shape({
      datathon: PropTypes.shape({
        title: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
      }).isRequired,
      dataTalks: PropTypes.shape({
        title: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
      }).isRequired,
      apunts: PropTypes.shape({
        title: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
      }).isRequired,
      dataDays: PropTypes.shape({
        title: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
};

export default Projects;
