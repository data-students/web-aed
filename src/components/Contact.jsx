import { useState } from 'react';
import PropTypes from 'prop-types';

const Contact = ({ t }) => {
  const [state, setState] = useState({
    submitted: false,
    submitting: false,
    error: false,
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
    } catch {
      setState({ submitting: false, submitted: false, error: true });
    }
  };

  return (
    <div id="Colaborar">
      {state.submitted && (
        <div className="form-success">
          <p>{t.success}</p>
        </div>
      )}

      {state.error && (
        <div className="form-error">
          <p>{t.error}</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label htmlFor="name">{t.name}</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            placeholder={t.namePlaceholder}
            disabled={state.submitting}
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">{t.email}</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder={t.emailPlaceholder}
            disabled={state.submitting}
          />
        </div>

        <div className="form-group">
          <label htmlFor="subject">{t.subject}</label>
          <input
            type="text"
            id="subject"
            name="subject"
            required
            placeholder={t.subjectPlaceholder}
            disabled={state.submitting}
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">{t.message}</label>
          <textarea
            id="message"
            name="message"
            required
            rows="5"
            placeholder={t.messagePlaceholder}
            disabled={state.submitting}
          ></textarea>
        </div>

        <div className="form-group">
          <button
            type="submit"
            className="button submit-button"
            disabled={state.submitting}
          >
            {state.submitting ? t.submitting : t.submit}
          </button>
        </div>
      </form>
    </div>
  );
};

Contact.propTypes = {
  t: PropTypes.shape({
    success: PropTypes.string.isRequired,
    error: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    namePlaceholder: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    emailPlaceholder: PropTypes.string.isRequired,
    subject: PropTypes.string.isRequired,
    subjectPlaceholder: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    messagePlaceholder: PropTypes.string.isRequired,
    submitting: PropTypes.string.isRequired,
    submit: PropTypes.string.isRequired,
  }).isRequired,
};

export default Contact;
