import React from 'react'
import './Home.css'
const Home = () => {
  return (
    <div className='home'>
      <h1 className="home__title">
        We are web agency based in Los Angeles, CA
      </h1>
      <div className="home__info">
        <div className="home__info-story">
          <b>Far far away, behind the word mountains</b>, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
        </div>
        <div className="home__info-links">
          <div>
            <a href="#">Technology</a>
            <a href="#">Marketing</a>
            <a href="#">Product & Design</a>
          </div>
          <div>
            <a href="#">Strategic Consulting</a>
            <a href="#">Business Synergies</a>
            <a href="#">Fundrising</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home