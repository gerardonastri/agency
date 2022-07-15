import React from 'react'
import './Clients.css'
import ClientsCard from '../../components/ClientsCard/ClientsCard'

const Clients = () => {
  return (
    <div className='clients'>
      <div className="service__wrapper">
        <div className="service__info">
          <div className="service__info-title">
            <div>
              <div className="service__line" />
              <h1>Our Clients</h1>
            </div>
          </div>
          <div className="service__info-history">
            <p><b>Separated they live in Bookmarksgrove </b>right at the coast of the Semantics, a large language ocean. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
           
          </div>
        </div>
        <div className="clients__card-container">
          <ClientsCard title="Goldline" img="https://preview.colorlib.com/theme/pageone/images/xlogo-goldline.png.pagespeed.ic.40nSQphVgJ.webp"  />
          <ClientsCard title="Foxhub" img="https://preview.colorlib.com/theme/pageone/images/xlogo-foxhub.png.pagespeed.ic.m_RIIjdghM.webp"  />
          <ClientsCard title="Ideaa"  img="https://preview.colorlib.com/theme/pageone/images/xlogo-ideaa.png.pagespeed.ic.dcrk4QzNLC.webp"/>
          <ClientsCard title="Nirastate" img="https://preview.colorlib.com/theme/pageone/images/xlogo-nirastate.png.pagespeed.ic.PYMusK9IB_.webp"  />
          <ClientsCard title="Treva" img="https://preview.colorlib.com/theme/pageone/images/xlogo-treva.png.pagespeed.ic.djPyQqXp3h.webp"  />
          <ClientsCard title="Goldline" img="https://preview.colorlib.com/theme/pageone/images/xlogo-goldline.png.pagespeed.ic.40nSQphVgJ.webp"  />
        </div>
      </div>
    </div>
  )
}

export default Clients