import { useEffect, useState } from 'react';

import TopBar from './TopBar';
import Home from './components/Home';
import Objectius from './components/Objectius';
import Projects from './components/Projects';
import Team from './components/Team';
import JoinUs from './components/JoinUs';
import Footer from './components/Footer';
import translations from './i18n/translations';
import './App.css';

function App() {
  const [language, setLanguage] = useState('ca');
  const t = translations[language];

  useEffect(() => {
    document.documentElement.lang = t.meta.htmlLang;
  }, [t.meta.htmlLang]);

  return (
    <>
      <TopBar language={language} setLanguage={setLanguage} t={t.nav} />
      <Home t={t.home} />
      <Objectius t={t.goals} />
      <Projects t={t.projects} />
      <Team t={t.team} />
      <JoinUs t={t.join} contactTexts={t.contact} />
      <Footer t={t.footer} />
    </>
  );
}

export default App;
