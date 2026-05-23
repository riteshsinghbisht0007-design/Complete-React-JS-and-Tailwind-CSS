import React from 'react'

const card = (props) => {
  console.log(props)
  return (
    <div>
      <div className="card">
        <img src={props.img} alt='cat'></img>
        <h1>This is {props.user} and age is {props.age}</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto sunt veniam ea saepe adipisci rerum pariatur numquam omnis. Molestiae provident nihil earum necessitatibus molestias delectus doloribus, cupiditate saepe recusandae sed.</p>
        <button>View Profile</button>
      </div>
    </div>
  )
}

export default card
