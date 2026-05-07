import Link from './Link';

const Footer = () => (
  <div className='section footer'>
    <ul>
      <li><Link href='mailto:hola@aed.cat'>hola@aed.cat</Link></li>
      <li><br/></li>
      <li><Link href='https://instagram.com/datastudents'>Instagram</Link></li>
      <br/>
      <li><Link href='https://linkedin.com/company/data-students'>LinkedIn</Link></li>
      <br/>
      <li><Link href='https://youtube.com/@datastudents'>YouTube</Link></li>
      <li><br/></li>
      <li><Link href='https://twitter.com/datastudents'>X (Twitter)</Link></li>
      <br/>
      <br/>
    </ul>
    <p>© {new Date().getFullYear()} Associació d&apos;Estudiants de Dades</p>
  </div>
);

export default Footer;
