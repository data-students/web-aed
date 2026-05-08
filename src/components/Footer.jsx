import PropTypes from 'prop-types';
import Link from './Link';

const Footer = ({ t }) => (
  <div className="section footer">
    <ul>
      <li><Link href="mailto:hola@aed.cat">hola@aed.cat</Link></li>
      <li><br /></li>
      <li><Link href="https://instagram.com/datastudents">Instagram</Link></li>
      <br />
      <li><Link href="https://linkedin.com/company/data-students">LinkedIn</Link></li>
      <br />
      <li><Link href="https://youtube.com/@datastudents">YouTube</Link></li>
      <li><br /></li>
      <li><Link href="https://twitter.com/datastudents">X (Twitter)</Link></li>
      <br />
      <br />
    </ul>
    <p>&copy; {new Date().getFullYear()} {t.copyright}</p>
  </div>
);

Footer.propTypes = {
  t: PropTypes.shape({
    copyright: PropTypes.string.isRequired,
  }).isRequired,
};

export default Footer;
