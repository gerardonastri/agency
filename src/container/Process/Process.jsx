import React from 'react'
import './Process.css'
import ProcessCard from '../../components/ProcessCard/ProcessCard'

const Process = () => {
  return (
    <div className='process'>
      <div className="service__wrapper">
        <div className="service__info">
          <div className="service__info-title">
            <div>
              <div className="service__line" />
              <h1>Our Process</h1>
            </div>
          </div>
          <div className="service__info-history">
            <p><b>Separated they live in Bookmarksgrove </b>right at the coast of the Semantics, a large language ocean. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
            <button className='custom-button' style={{textAlign: 'left'}}>LEARN MORE</button>
          </div>
        </div>
        <div className="process__card-container">
          <ProcessCard title="Information Gathering" num="01"   />
          <ProcessCard title="Planning"   num="02" />
          <ProcessCard title="Design" num="03"  />
          <ProcessCard title="Development"   num="04" />
          <ProcessCard title="Testing and Delivery"  num="05"  />
          <ProcessCard title="Maintenance"  num="06"  />
        </div>
      </div>
    </div>
  )
}

export default Process


