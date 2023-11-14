// import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Help from './components/Help';
import Contact from './components/Contact';
import About from './components/About';
import Ads from './components/Ads';



function App() {
  return (
    <div>
<Router>
  <Home/>
      <Routes>
            <Route path="/" element ={<h1 className='styleincss'>Hooks are functions that make functional components work like Class components  </h1>}/>  
            <Route path="/about" 
            element ={<div><h1 className='styleincss'>WELCOME TO HOME OF "USESTATE HOOK" </h1><p>Usestate hook is a function to add state(values or variables) in Functional Component</p><About /></div> }/>  

            <Route path="/contact" element ={<div><h1 className='styleincss'>WELCOME TO HOME OF "USEEFFECT HOOK"</h1><p>UseEffect hook is used to perform side effects in our component. Side effects are actions performed with "outside world"</p><p>Side Effects: <br/>1.fetching data from API <br/>2.updating DOM doc & window <br/>3.Time functions settimeout & setInterval<br/></p> <Contact/></div>}/>  

            <Route path="/help" element ={<div><h1 className='styleincss'>WELCOME TO HOME OF "USECONTEXT HOOK"</h1><p>UseContext hook is used to manage global data in react appliations<br/>*GlobalState<br/>*themes<br/>*services<br/>*usersettings</p><Help/></div>}/>  

            <Route path="/ads" element ={<h1 className='styleincss'>WELCOME TO HOME OF SONY ERICSON <Ads/></h1>}/>  

      </Routes>
   <Footer/>
</Router>
   
    </div>
    // <div className="App">
    //   <header className="App-header">
    //   <Home/>
    //     <img src={logo} className="App-logo" alt="logo" />
    //   <Footer/>
    //   </header>
      
    // </div>
  )
}

export default App;









// componet ---->component = props

// const a= "avinash"

// console.log(b)
// console.log(a)
// // try{
// //   console.log(b)
// // }catch{
// //   console.log("first")
// // }
// // console.log(a)

