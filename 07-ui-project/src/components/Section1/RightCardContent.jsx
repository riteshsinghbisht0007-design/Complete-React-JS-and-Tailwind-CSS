import React from 'react'

const RightCardContent = (props) => {
  return (


    <div className="absolute top-0 left-0 h-full w-full z-10 p-8 flex flex-col justify-between">

      <h2 className="bg-white text-2xl font-semibold rounded-full h-12 w-12 flex justify-center items-center">
        {props.id + 1}
      </h2>

      <div>
        <p className="text-shadow-2xs text-xl  leading-normal text-white mt-10">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda aut error molestias possimus facilis non esse obcaecati, doloribus, ducimus modi laboriosam dvero corrupti vel incidunt obcaecati dolorum officiis minus
        </p>

        <div className="flex justify-between mt-4">
          <button style={{ backgroundColor: props.color }} className="text-white font-semibold px-8 py-2 rounded-full text-lg">
            {props.tag}
          </button>

          <button className="bg-blue-600 text-white font-medium px-3 py-2 rounded-full">
            →
          </button>
        </div>
      </div>

    </div>

  );
}


export default RightCardContent
