import React from 'react'
import './Clients.css'
import ClientsCard from '../../components/ClientsCard/ClientsCard'
import img1 from '../../images/client-1.webp'
import img2 from '../../images/client-2.webp'
import img3 from '../../images/client-3.webp'
import img4 from '../../images/client-4.webp'
import img5 from '../../images/client-5.webp'


const Clients = () => {
  return (
    <div className='clients' id='clients'>
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
          <ClientsCard title="Goldline" img={img1}/>
          <ClientsCard title="Foxhub" img={img2}/>
          <ClientsCard title="Ideaa"  img={img3}/>
          <ClientsCard title="Nirastate" img={img4}/>
          <ClientsCard title="Treva" img={img5}/>
          <ClientsCard title="Goldline" img={img1}/>
        </div>
      </div>
    </div>
  )
}

export default Clients