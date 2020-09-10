import React, { useState } from 'react'
import HeaderBar from './components/HeaderBar'
import Home from './components/Home'
import Education from './components/Education'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Contact from './components/Contact'
import { Container } from '@material-ui/core'
import './styles.css'

function App() {
  const [selectedTab, setSelectedTab] = useState(0)

  return (
    <>
      <HeaderBar handleChange={setSelectedTab} />
      <main>
        <Container maxWidth="md" className="TabContent">
          {selectedTab === 0 && <Home />}
          {selectedTab === 1 && <Skills />}
          {selectedTab === 2 && <Experience />}
          {selectedTab === 3 && <Education />}
          {selectedTab === 4 && <Contact />}
        </Container>
      </main>

      <footer></footer>
    </>
  )
}

export default App
