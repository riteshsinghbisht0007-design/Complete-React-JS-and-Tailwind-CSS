import React from 'react'
import { MoveUpRight } from 'lucide-react';
import RightCard from './RightCard';

const RightContent = (props) => {
  return (
    <div id='right' className='h-full overflow-x-auto p-6 w-3/4 flex flex-nowrap rounded-4xl gap-10'>

      {props.users.map(function (elem, idx) {
        return <RightCard key={idx} color={elem.color} id={idx} img={elem.img} tag={elem.tag} />;
      })
      }
    </div>
  )
}

export default RightContent
