import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './compomemts/App.module.css'
import Header from "./compomemts/Hearder";
import hitem from "./compomemts/headeritems.json";
import AmazingServices from "./compomemts/AmazingServices";
import ams from "./compomemts/amazinservices.json";
import WhoAreWe from "./compomemts/WhoAreWe";
import waw from "./compomemts/whoarewe.json";
import styles from "./compomemts/Container.module.css";
import Footer from "./compomemts/Footer"

function App() {
  return (
    <>
      <div className={styles.container}>
        <Header itemm={hitem} />
      </div>
      <main>
        <div className={styles.container}>
          <AmazingServices card={ams} />
          <WhoAreWe card={waw} />
        </div>
        <div className={styles.container}>
        </div>
      </main>
      <div className={styles.container}>
        <Footer />
      </div>
    </>
  )
}

export default App
