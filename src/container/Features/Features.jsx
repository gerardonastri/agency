import React from 'react'
import './Features.css'
import FeaturesCard from '../../components/FeaturesCard/FeaturesCard'
import {BiVector} from 'react-icons/bi'
import {MdOutlineMessage} from 'react-icons/md'
import {FiSettings} from 'react-icons/fi'
import {AiOutlineDesktop} from 'react-icons/ai'
import {FaTelegramPlane} from 'react-icons/fa'
import {FaBook} from 'react-icons/fa'

const Features = () => {
  return (
    <div className='features'>
      <div className="service__wrapper">
        <div className="service__info">
          <div className="service__info-title">
            <div>
              <div className="service__line" />
              <h1>Features</h1>
            </div>
          </div>
          <div className="service__info-history">
            <p><b>Separated they live in Bookmarksgrove </b>right at the coast of the Semantics, a large language ocean. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
           
          </div>
        </div>
        <div className="features__card-container">
          <FeaturesCard title="Illustration" icon={<BiVector />}  />
          <FeaturesCard title="24/7 Support" icon={<MdOutlineMessage />} />
          <FeaturesCard title="Easy to use"  icon={<FiSettings />}  />
          <FeaturesCard title="Web Development" icon={<AiOutlineDesktop />}  />
          <FeaturesCard title="Intuitive" icon={<FaTelegramPlane />}  />
          <FeaturesCard title="Documentation" icon={<FaBook />}  />
        </div>
      </div>
    </div>
  )
}

export default Features