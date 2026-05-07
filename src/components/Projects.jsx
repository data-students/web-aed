import PropTypes from 'prop-types';
import './Projects.css';

const ProjectRow = ({ title, img, text, button_text = 'Més informació', href, button_text_2, href_2, reverse, imageFit = 'cover' }) => (
  <div className={`project-row ${reverse ? 'reverse' : ''}`}>
    <div className="project-image-container">
      <img src={img} alt={title} className="project-image" style={{ objectFit: imageFit, padding: imageFit === 'contain' ? '0.2rem' : '0' }} />
    </div>
    <div className="project-content">
      <h3 className="project-title">{title}</h3>
      <p className="project-text">{text}</p>
      <div className="project-actions">
        <a className="project-btn" href={href} target="_blank" rel="noopener noreferrer">
          {button_text}
        </a>
        {button_text_2 && href_2 && (
          <a className="project-btn project-btn-secondary" href={href_2} target="_blank" rel="noopener noreferrer">
            {button_text_2}
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
  button_text: PropTypes.string,
  href: PropTypes.string.isRequired,
  button_text_2: PropTypes.string,
  href_2: PropTypes.string,
  reverse: PropTypes.bool,
  imageFit: PropTypes.oneOf(['cover', 'contain'])
};

const Projects = () => (
  <div className='projects-section' id='projectes'>
    <div className="projects-container">
      <h2 className='section-title'>Els nostres projectes</h2>
      
      <div className='projects-list'>
        <ProjectRow
          title='Datathon FME'
          img='datathon.webp'
          text='La datató més gran de Catalunya, amb +400 participants. Un esdeveniment de 30 hores en què els equips resolen reptes reals amb ciència de dades i IA.'
          button_text='Saber-ne més'
          href='https://datathon.cat'
          reverse={false}
        />
        <ProjectRow
          title='Data Talks'
          img='dataTalks.svg'
          text="Aprèn sobre la ciència de dades i les seves aplicacions de la mà de ponents amb àmplia experiència en el sector."
          button_text="Saber-ne més"
          href='https://luma.com/data-talks'
          button_text_2="Vídeos"
          href_2="https://www.youtube.com/playlist?list=PL0PIFoo8yCbjjiyfYopBpNXaf-T47_Abx"
          reverse={true}
          imageFit="contain"
        />
        <ProjectRow
          title='Apunts Dades'
          img='apunts.webp'
          text='Un recull d&apos;apunts i exàmens de les assignatures del nostre grau. Amb una plataforma col·laborativa on preguntar i resoldre dubtes.'
          button_text='Saber-ne més'
          href='https://apuntsdades.com'
          reverse={false}
        />
        <ProjectRow
          title='Data Days'
          img='data-days.webp'
          text='Un cicle de xerrades, tallers i activitats al voltant de la ciència i enginyeria de dades. Per a estudiants de tots els nivells i professionals!'
          button_text='Saber-ne més'
          href='https://datadays.aed.cat'
          reverse={true}
        />
      </div>
    </div>
  </div>
);

export default Projects;
