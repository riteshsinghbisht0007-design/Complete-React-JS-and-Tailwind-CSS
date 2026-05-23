import React from 'react'

const App = () => {

  const submitHandler = (e) => {
    e.preventDefault()
    console.log(e.target[0].value)
  }
  return (
    <div>
      <form onSubmit={e => submitHandler(e)}>
        <input type="text" placeholder='Enter Your Name' />
        <input type="submit" />
      </form>
    </div>
  )
}

export default App
