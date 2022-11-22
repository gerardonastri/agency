import React from 'react'
import './Services.css'
import ServiceCard from '../../components/ServiceCard/ServiceCard'
import img1 from '../../images/service-1.webp'
import img2 from '../../images/service-2.webp'
import img3 from '../../images/service-3.webp'
import img4 from '../../images/service-4.webp'

const Services = () => {
  return (
    <div className='service' id='services'>
      <div className="service__wrapper">
        <div className="service__info">
          <div className="service__info-title">
            <div>
              <div className="service__line" />
              <h1>Services</h1>
            </div>
          </div>
          <div className="service__info-history">
            <p><b>Separated they live in Bookmarksgrove </b>right at the coast of the Semantics, a large language ocean. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
            <button className='custom-button' style={{textAlign: 'left'}}>GET IN TOUCH</button>
          </div>
        </div>
        <div className="service__card-container">
          <ServiceCard title="Graphic Design" img={img1} />
          <ServiceCard title="Web Development" img={img2}  />
          <ServiceCard title="Branding"  img={img3} />
          <ServiceCard title="Iconography" img={img4}  />
        </div>
      </div>
    </div>
  )
}

export default Services