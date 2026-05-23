import React from 'react'
import RightCardContent from './RightCardContent.jsx'
const RightCard = (props) => {
  return (
    <div>
      <div className="h-170 shrink-0 relative overflow-hidden w-80 rounded-xl">

        <img
          src={props.img}
          alt=""
          className="h-full w-full object-cover rounded-xl z-0"
        />

        <RightCardContent id={props.id} color={props.color} tag={props.tag} />
      </div>
    </div>
  )
}

export default RightCard

























