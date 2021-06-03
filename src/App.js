import React from 'react'
import TabSetUp from './components/main/Main'
import './App.css';
import logo from './images/sword-zero.png'

function App() {

  return (
      <>
        <header>
        <img id='logo' src={logo} alt='logo' />
        </header>
        <main>
        <TabSetUp />
        </main>
      </>
  )
}

export default App;
