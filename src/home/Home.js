import React from 'react'
import "./Home.css"
import Socials from "./Socials"
import Data from "./Data"

const Home = () => {
  return (
    <div className="home-container container grid">
        <div className="home-content grid">
            <Data />
            <Socials />
            <p> Play a game of Sudoku: (Create a game component) </p>
        </div>
    </div>
  )
}

export default Home