import React from 'react'
import './About.css'
import TeamCard from '../../components/TeamCard/TeamCard'

const About = () => {
  return (
    <div className='about'>
      <div className="service__wrapper">
        <div className="service__info-title">
          <div>
            <div className="service__line" />
            <h1>Office and team</h1>
          </div>
        </div>
        <div className="about__info">
          <img src="https://preview.colorlib.com/theme/pageone/images/xabout_1.jpg.pagespeed.ic.cqA1ZZJiPN.webp" alt="about info" />
          <div>
            <h2 className="about__info-title">Our Office</h2>
            <p className="about__info-desc"><b>Separated they live in Bookmarksgrove</b> right at the coast of the Semantics, a large language ocean. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.

            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.

            A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
          </div>
        </div>

        <div className="about__team">
          <h2>Our Team</h2>
          <div className="about__team-cards">
            <TeamCard img="https://preview.colorlib.com/theme/pageone/images/xperson_1.jpg.pagespeed.ic.FPPJMandp9.webp" title="Bradley Costa" position="CEO, Partner" />
            <TeamCard img="https://preview.colorlib.com/theme/pageone/images/xperson_2.jpg.pagespeed.ic.WP7nwqVs-9.webp" title="Chanice Muir" position="CTO, Partner" />
            <TeamCard img="https://preview.colorlib.com/theme/pageone/images/xperson_3.jpg.pagespeed.ic.omskDCiiog.webp" title="Alisha Ellison" position="Web Designer" />
            <TeamCard img="https://preview.colorlib.com/theme/pageone/images/xperson_4.jpg.pagespeed.ic.ZZyyDWl-59.webp" title="Justin Smith" position="Web Developer" />
          </div>
        </div>

      </div>
    </div>
  )
}

export default About