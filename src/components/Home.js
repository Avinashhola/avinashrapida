import React from 'react'
// import {Link} from 'react-router-dom'
import './Homesty.css'
import Icon from '../images/images1.png'





const Home = () => {
  return (
    <div className='styling-home'>
       {/* <img src="../images/images-logo.png" alt="Log0" className='img-styling'/> */}
       <img src={Icon} alt="Log0" className='img-styling'/>
  <div>
            <a href="/">Home</a>
            <a href="/about">About us</a>
            <a href="/contact">Contact Us</a>
            <a href="/help">Help</a>
            {/* <a><Link to ='/ads'>Ads</Link></a> */}
            {/* <li><Link to ='/ads'>Ads</Link></li>   */}

       </div>
  </div>
  )
}

export default Home


















// import React from 'react'
// import './Homesty.css'
// const Home = () => {
//     const myStyles = {
//         backgroundColor: 'lightblue',
//         color: 'green',
//         padding: '10px',
//         borderRadius: '5px',
//       };
//   return (
//     <div className='styling-home'><h1 style={myStyles}>React </h1>
//     <p>React code is made of entities called components. These components are modular and reusable.<br/> React applications typically consist of many layers of components. The components are rendered to a root element in the DOM using the React DOM library.<br/> When rendering a component, values are passed between components through props (short for "properties"). <br/>Values internal to a component are called its state.
//    <br/> The two primary ways of declaring components in React are through function components and class components.
// </p></div>
//   )
// }

// export default Home

