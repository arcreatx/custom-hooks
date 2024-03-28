import React, {useState} from 'react';
import './App.css';
import Name from './components/Name';
import Display from './components/Display';
import Language from './components/Language';


function App() {
  const [name, setName] = useState("");
  const [language, setLanguage] = useState("");

  return (
    <div className="App">
      <Name name={name} setName={setName}/>
      <Language language={language} setLanguage={setLanguage}/>
      <Display name={name} language={language} />
    </div>
  );
}

export default App;
