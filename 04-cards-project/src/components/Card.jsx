import React from 'react'
import { Bookmark } from 'lucide-react'

const card = (props) => {
  return (
    <div>
      <div className="card">
        <div>
          <div className="top">
            <img src={props.brandlogo} alt="" />
            <button>Save<Bookmark size={10} /></button>

          </div>
          <div className="center">
            <h1>{props.company} <span><h3>{props.datePosted}</h3></span></h1>
            <h2>{props.post}</h2>
            <div className='tag'>
              <h4>{props.tag1}</h4>
              <h4>{props.tag2}</h4>
            </div>
          </div>
        </div>
        <div className="bottom">

          <div>
            <h2>{props.pay}</h2>
            <p>{props.location}</p>
          </div>

          <button>Apply Now</button>
        </div>
      </div>
    </div>
  )
}

export default card
