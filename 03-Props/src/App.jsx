import React from 'react'
import Card from './components/Card.jsx'
const App = () => {
  return (
    <>
      <div className="parent">
        <Card user="Ritesh" age={20} img="https://tse4.mm.bing.net/th/id/OIP.ZOZj0a6vrSKQcm_WiX0CMAHaE8?rs=1&pid=ImgDetMain&o=7&rm=3" />
        <Card user="Sarthak" age={28} img="https://cdn.mos.cms.futurecdn.net/3RNRsqYLopjbypxutWyEWb.jpg" />
        <Card user="Ronit" age={19} img="https://tse3.mm.bing.net/th/id/OIP.ryXBxpBYWJvFahsoi8PXywHaFj?rs=1&pid=ImgDetMain&o=7&rm=3" />
      </div>


    </>
  )
}

export default App
