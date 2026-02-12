import { useState } from 'react';
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

const Contact = () => { // Part del formulari de contacte per les data-talks
  const [state, setState] = useState({
    submitted: false,
    submitting: false,
    error: false
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setState({ submitting: true, submitted: false, error: false });
    
    const form = e.target;
    const formData = new FormData(form);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        body: formData,
      });
      
      if (response.ok) {
        setState({ submitting: false, submitted: true, error: false });
        form.reset();
      } else {
        setState({ submitting: false, submitted: false, error: true });
      }
    } catch (error) {
      setState({ submitting: false, submitted: false, error: true });
    }
  };

  return (
    <div id='Colaborar'>
      <h2 className='subtitle-dark'>
        Busquem gent interessada en exposar-nos el seu treball i les seves investigacions! 
        Si vols col·laborar amb l&apos;AED i presentar-nos el teu treball, omple el formulari:
      </h2>
      
      {state.submitted && (
        <div className="form-success">
          <p>Gràcies! El teu missatge s'ha enviat correctament.</p>
        </div>
      )}
      
      {state.error && (
        <div className="form-error">
          <p>Hi ha hagut un error. Torna-ho a provar o envia'ns un correu directe.</p>
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Nom complet *</label>
          <input 
            type="text" 
            id="name" 
            name="name" 
            required 
            placeholder="El teu nom"
            disabled={state.submitting}
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="email">Correu electrònic *</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            required 
            placeholder="exemple@email.com"
            disabled={state.submitting}
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="subject">Assumpte *</label>
          <input 
            type="text" 
            id="subject" 
            name="subject" 
            required 
            placeholder="Sobre què vols parlar?"
            disabled={state.submitting}
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="message">Missatge *</label>
          <textarea 
            id="message" 
            name="message" 
            required 
            rows="5"
            placeholder="Explica'ns la teva proposta..."
            disabled={state.submitting}
          ></textarea>
        </div>
        
        <div className="form-group">
          <button 
            type="submit" 
            className="button submit-button"
            disabled={state.submitting}
          >
            {state.submitting ? 'Enviant...' : 'Enviar missatge'}
          </button>
        </div>
      </form>
    </div>
  );
};

const Home = () => (
  <div className='section' id='nosaltres'>
    <h1>Associació<br />d&apos;Estudiants de Dades</h1>
    <h2>Som l&apos;associació estudiantil del <Link href='https://dse.upc.edu'>grau en Ciència i Enginyeria de Dades</Link> de la <Link href='https://upc.edu'>UPC</Link>. </h2>
  </div>
);

// Rest of your components stay the same...
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
    <h2 className='subtitle-dark'>Els nostres objectius</h2>
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

const Card = ({ title, img, text, button_text = 'Més informació', href }) => (
  <div className='card'>
    <img src={img} alt={title} />
    <div className='card-content'>
      <div>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
      <a className='button' href={href} target='blank' rel='noopener'>{button_text}</a>
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
    <h2 className='subtitle-dark'>Els nostres projectes</h2>
    <div className='grid'>
      <Card
        title='Datathon FME'
        img='datathon.webp'
        text='La datató més gran de Catalunya, amb 300 participants. Un esdeveniment de 30 hores en què els equips resolen reptes reals amb ciència de dades i IA.'
        button_text='Saber-ne més!'
        href='https://datathon.cat'
      />
      <Card
        title='Data Days'
        img='data-days.webp'
        text='Un cicle de xerrades, tallers i activitats al voltant de la ciència i enginyeria de dades. Per a estudiants de tots els nivells i professionals!'
        button_text='Saber-ne més!'
        href='https://datadays.aed.cat'
      />
      <Card
        title='Apunts Dades'
        img='apunts.webp'
        text='Un recull d&apos;apunts i exàmens de les assignatures del nostre grau. Amb una plataforma col·laborativa on preguntar i resoldre dubtes.'
        button_text='Saber-ne més!'
        href='https://apuntsdades.com'
      />
      <Card
          title='DataTalks'
          img='dataTalks.webp'
          text="Ponents d'arreu del món presenten com les dades afecten els diferents ámbits del coneixement tecnologia."
          button_text="Pròximament"
          href='mailto:hola@aed.cat'
        />
    </div>
    <Contact />
  </div>
);

const JoinUs = () => (
  <div className='section' id='unir-se'>
    <h2 className='subtitle'>Vols unir-te?</h2>
    <div className='grid'>
      <div className='grid-text'>
        <h3>Si ets estudiant o <i>alumni</i> del grau en ciència i enginyeria de dades de la UPC, pots unir-te a l&apos;associació!</h3>
        <p>Si vols col·laborar activament, escriu-nos a <Link href='mailto:hola@aed.cat'>hola@aed.cat</Link>! Estem oberts a noves idees!
        </p>
      </div>
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
    <p>© {new Date().getFullYear()} Associació d&apos;Estudiants de Dades</p>
  </div>
);

function App() {
  return (
    <>
      <TopBar />
      <Home />
      <Objectius />
      <Projects />
      <JoinUs />
      <Footer />
    </>
  );
}

export default App;