import React, { useState } from 'react'
import { useSyncExternalStore } from 'react';

const App = () => {

  const [num, setNum] = useState({ user: 'sarthak', age: 20 });
  const btnClicked = () => {
    const newNum = { ...num };
    newNum.user = 'Ritesh',
      newNum.age = 21
    setNum(newNum);
  }


  return (
    <div>
      <h1>{num.user} {num.age}</h1>
      <button onClick={btnClicked}>CLick</button>
    </div>
  )
}

export default App





















// import React from 'react'
// import { useState } from 'react'

// const App = () => {

//   const [num, setNum] = useState(1);
//   function increaseNum() {
//     setNum(num + 1);
//   }

//   function decreaseNum() {
//     setNum(num - 1);
//   }

//   function jumpBy5() {
//     setNum(num + 5);
//   }

//   return (
//     <div>
//       <h1>{num}</h1>
//       <button onClick={increaseNum}>increase</button>
//       <button onClick={decreaseNum}>decrease</button>
//       <button onClick={jumpBy5}>Increase Bye 5</button>
//     </div>
//   )
// }

// export default App























// import React, { useState } from 'react'


// const App = () => {
//   const [num, setNum] = useState(10);
//   const [username, setUsername] = useState('Sarthak');
//   const [user, setUser] = useState([10, 20, 30, 40, 50]);
//   const changeA = () => {
//     setNum(20);
//   }

//   function changeB() {
//     setNum(30)
//     setUsername('RItesh')
//     setUser([1, 2, 3, 4, 5]);
//   }
//   return (
//     <div>
//       <h1>Value of Num is {num}<br />{user}<br /> Value of user is {username}</h1>

//       <button onClick={changeA, changeB}>Change A&B</button>
//     </div>
//   )
// }

// export default App
