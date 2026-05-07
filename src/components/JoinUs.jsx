import Contact from './Contact';

const JoinUs = () => (
  <div className='section' id='unir-se'>
    <h2 className='section-title'>Vols col·laborar?</h2>
    <div className='grid'>
      <div className='grid-text'>
        <h4 style={{ textAlign: 'center' }}> Si ets estudiant o <i>alumni</i> del grau en Ciència i Enginyeria de Dades de la UPC, pots unir-te a l&apos;associació!</h4>
        <br/>
        <br/>
        <h4 style={{ textAlign: 'center' }}> També estem oberts a noves idees i col·laboracions amb altres entitats!</h4>
        <br/>
        <br/>
      </div>
    </div>
    <Contact />
  </div>
);

export default JoinUs;
