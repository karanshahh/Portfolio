import React from 'react'
import "./Home.css"
import Socials from "./Socials"
import Data from "./Data"

const Home = () => {
  return (
    <div className="home-container container grid mb-4" id="home">
        <div className="home-content grid">
            <Data />
            <Socials />
        </div>
    </div>
  )
}

export default Home