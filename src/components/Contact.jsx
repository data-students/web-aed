import { useState } from 'react';

const Contact = () => { // Part del formulari de contacte pels voluntaris
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
            placeholder="El Teu Nom"
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

export default Contact;
