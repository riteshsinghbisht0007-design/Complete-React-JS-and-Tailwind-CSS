import React, { useState } from 'react'


const App = () => {

  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')

  const [task, setTask] = useState([])

  const submitHandler = (e) => {
    e.preventDefault()

    const copyTask = [...task]
    copyTask.push({ title, details })

    setTask(copyTask)

    setTitle('')
    setDetails('')
  }


  const deleteNote = (idx) => {
    const copyTask = [...task]
    copyTask.splice(idx, 1)
    setTask(copyTask[idx])
  }

  return (
    <div className='h-screeen flex bg-black text-white '>

      <form onSubmit={(e) => {
        e.preventDefault()
        submitHandler(e)
      }} className='flex gap-4 lg:w-1/2items-start flex-col p-10'>

        <input
          type="text"
          placeholder='Enter Notes Heading'
          className='px-5 w-full font-medium  py-2 border-2 outline-none rounded'
          value={title}
          onChange={(e) => {
            console.log(e.target.value);
            setTitle(e.target.value)

          }}
        />
        <textarea
          type="text"
          placeholder='Write Details'
          className='px-5 h-32 font-medium w-full flex items-start flex-row py-2 border-2 outline-none rounded'
          value={details}
          onChange={(e) => {
            console.log(e.target.value);
            setDetails(e.target.value)
          }}
        />
        <button
          className='w-full cursor-pointer active:bg-gray-400 font-medium bg-white text-black px-5 py-2   outline-none rounded'>Add Note</button>
        {/* </div> */}

      </form>
      <div className='text-xl font-bold lg:w-1/2 border1   flex-wrap p-10'>
        <h1 className='text-3xl font-bold'>Recent Notes</h1>
        <div className="flex gap-4 justify-start flex-wrap mt-5 h-[90%] overflow-auto">



          <div>


            {task.map(function (elem, idx) {
              return <div key={idx} className=" relative h-52 w-40 rounded-2xl text-black py-6 px-4 gap-4 bg-cover bg-[url('https://tse1.mm.bing.net/th/id/OIP.0kicUmErvaSI7_gLM6ZmagHaHc?r=0&rs=1&pid=ImgDetMain&o=7&rm=3')]">

                <h3 className='leading-ight text-xl font-bold'>{elem.title}</h3>
                <p className='mt-4 leading-tight font-medium text-gray-600'>{elem.details}</p>
                <button onClick={() => {
                  deleteNote(idx)
                }} className='w-full mt-auto cursor-pointer active:scale-95 bg-red-500 py-1 text-xs rounded font-bold text-white'>Delete</button>
              </div>
            })}


          </div>


        </div>
      </div>

    </div>
  )
}

export default App
