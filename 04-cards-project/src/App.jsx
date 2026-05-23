import React from 'react'
import Card from './components/Card.jsx'
import User from './components/User.jsx'

const App = () => {

  const jobOpenings = [
    {
      brandlogo: "https://th.bing.com/th/id/OIP.uBYsSL7JDekYP3VpxWZvYQHaHa?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
      company: "Google",
      datePosted: "5 days ago",
      post: "Frontend Developer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$45/hr",
      location: "Bangalore, India"
    },
    {
      brandlogo: "https://www.bing.com/th/id/OIP.6x6s1sTIRrU8my_FCLwPqwHaFj?w=193&h=145&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
      company: "Apple",
      datePosted: "2 weeks ago",
      post: "iOS Developer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$60/hr",
      location: "Hyderabad, India"
    },
    {
      brandlogo: "https://www.bing.com/th/id/OIP.5MoH8qTW_swxJ-jDBlOd8QHaFj?w=193&h=145&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
      company: "Meta",
      datePosted: "1 week ago",
      post: "React Developer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$50/hr",
      location: "Remote"
    },
    {
      brandlogo: "https://www.bing.com/th/id/OIP.dLl9UyA6y1GTydI-npnoygHaHv?w=135&h=128&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
      company: "Amazon",
      datePosted: "10 days ago",
      post: "Backend Developer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$55/hr",
      location: "Chennai, India"
    },
    {
      brandlogo: "https://th.bing.com/th/id/OIP.ahoKTrao5wh2CKafZfeHSQHaHa?w=166&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
      company: "Netflix",
      datePosted: "3 weeks ago",
      post: "UI Engineer",
      tag1: "Contract",
      tag2: "Senior Level",
      pay: "$70/hr",
      location: "Remote"
    },
    {
      brandlogo: "https://th.bing.com/th/id/OIP.7IgX6OczyQrC3djWBE8xnwHaHa?w=173&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
      company: "Microsoft",
      datePosted: "6 days ago",
      post: "Software Engineer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$48/hr",
      location: "Noida, India"
    },
    {
      brandlogo: "https://th.bing.com/th/id/OIP.535ly9am6VJl6eLg3DlEkwHaHa?w=200&h=200&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
      company: "Tesla",
      datePosted: "4 days ago",
      post: "Embedded Systems Engineer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$65/hr",
      location: "California, USA"
    },
    {
      brandlogo: "https://th.bing.com/th?q=Adobe+Logo+Red+Background&w=120&h=120&c=1&rs=1&qlt=70&o=7&cb=1&dpr=1.3&pid=InlineBlock&rm=3&mkt=nl-NL&cc=NL&setlang=en&adlt=moderate&t=1&mw=247",
      company: "Adobe",
      datePosted: "8 days ago",
      post: "Frontend Engineer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$52/hr",
      location: "Noida, India"
    },
    {
      brandlogo: "https://th.bing.com/th?q=Uber+Logo+White+Background&w=120&h=120&c=1&rs=1&qlt=70&o=7&cb=1&dpr=1.3&pid=InlineBlock&rm=3&mkt=nl-NL&cc=NL&setlang=en&adlt=moderate&t=1&mw=247",
      company: "Uber",
      datePosted: "2 days ago",
      post: "Full Stack Developer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$58/hr",
      location: "Bangalore, India"
    },
    {
      brandlogo: "https://th.bing.com/th/id/OIP.3Hp8iRmblKVcbBgTSDXfRAHaE8?w=244&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
      company: "Airbnb",
      datePosted: "1 week ago",
      post: "Backend Engineer",
      tag1: "Remote",
      tag2: "Senior Level",
      pay: "$75/hr",
      location: "Remote"
    }
  ];
  {
    jobOpenings.map(function (elem) {
      console.log(jobOpenings);
    })
  }
  return (
    <div className='parent'>
      {jobOpenings.map(function (elem, idx) {
        console.log(elem);
        return <div key={idx}>
          <Card company={elem.company} post={elem.post} brandlogo={elem.brandlogo} datePosted={elem.datePosted} tag1={elem.tag1} tag2={elem.tag2} pay={elem.pay} location={elem.location} />
        </div>
      })}


    </div>
  )
}

export default App
