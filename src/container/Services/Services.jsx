import React from 'react'
import './Services.css'
import ServiceCard from '../../components/ServiceCard/ServiceCard'

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
          <ServiceCard title="Graphic Design" img="https://preview.colorlib.com/theme/pageone/images/ximg_1.jpg.pagespeed.ic.4tvbU5MAj5.webp"  />
          <ServiceCard title="Web Development" img="https://preview.colorlib.com/theme/pageone/images/ximg_2.jpg.pagespeed.ic.yMZ53wnSqg.webp"  />
          <ServiceCard title="Branding"  img="https://preview.colorlib.com/theme/pageone/images/ximg_3.jpg.pagespeed.ic.5-py9_Gm9i.webp"/>
          <ServiceCard title="Iconography" img="https://preview.colorlib.com/theme/pageone/images/ximg_4.jpg.pagespeed.ic.xitJiC5SVk.webp"  />
        </div>
      </div>
    </div>
  )
}

export default Services