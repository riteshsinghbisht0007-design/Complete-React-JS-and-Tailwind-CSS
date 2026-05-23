import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'

const App = () => {

  const [userData, setUserData] = useState([])

  const [index, setIndex] = useState(1)
  const getData = async () => {
    const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=10`)
    setUserData(response.data)


  }

  useEffect(function () {
    getData()
  }, [index])


  let printUserData = <h3 className='text-gray-400 test-xs absolute top-1/2 left-1/2 translate-x-1/2 translate-y-1/2'>Loading... </h3>

  if (userData.length > 0) {
    printUserData = userData.map(function (elem, idx) {
      return (
        <div key={idx} className='flex flex-col items-center gap-2' >
          <a href={elem.url} target="_blank" rel="noopener noreferrer" className='flex flex-col items-center gap-2' >
            <div className='h-40 w-44 bg-white rounded-xl' >
              <img className='h-full  w-full border-radius-10%  overflow-hidden object-cover ' src={elem.download_url} alt="" />
            </div>
            <h2 className='font-bold text-lg'>{elem.author}</h2>
          </a>
        </div>
      )
    })
  }

  return (
    <div className='bg-black h-screen overflow-y-auto text-white'>
      <h1 className='text-2xl font-bold text-center my-4'>{index}</h1>

      <div className='flex flex-wrap gap-4 '>
        {printUserData}
      </div>

      <div className="flex justify-center gap-4 my-4 ">
        <button className='bg-amber-400 cursor-pointer active:scale-95 text-sm px-4 py-2 text-black rounded font-semibold  '
          onClick={() => {
            if (index > 1) {
              setIndex(index - 1)
              setUserData([])
            }
          }
          }
        >
          Prev

        </button>
        <button className='bg-amber-400 cursor-pointer active:scale-95 text-sm px-4 py-2 text-black rounded  font-semibold'

          onClick={() =>
            setUserData([]) ||
            setIndex(index + 1)}>Next</button>
      </div>
    </div>
  )
}

export default App
