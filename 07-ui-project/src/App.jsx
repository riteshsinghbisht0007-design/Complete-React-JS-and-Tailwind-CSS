import React from 'react'
import Section2 from './components/Section1/Section2/Section2'
import Section1 from './components/Section1/Section1'
import Page1Content from './components/Section1/Page1Content'
const App = () => {


  const users = [
    {
      img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=988&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro: '',
      color: 'blue',
      tag: 'Satisfied'

    },


    {
      img: 'https://images.unsplash.com/photo-1662483820416-9cfac24f459b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro: '',
      color: 'aquamarine',
      tag: 'Underserved'
    },
    {
      img: 'https://images.unsplash.com/photo-1752856408620-2e6fc6ac072f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro: '',
      color: 'green',
      tag: 'Underbanked'
    },
    {
      img: 'https://images.unsplash.com/photo-1600275669439-14e40452d20b?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro: '',
      color: 'yellow',
      tag: 'underscored'
    },
    {
      img: 'https://plus.unsplash.com/premium_photo-1661641353075-f0eaf2d82aae?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro: '',
      color: 'red',
      tag: 'Underhyped'
    }
  ]
  return (
    <>

      <Section1 users={users} />
      <Section2 />

    </>
  )
}

export default App
