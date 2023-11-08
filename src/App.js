// import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Help from './components/Help';
import Contact from './components/Contact';
import About from './components/About';



function App() {
  return (
    <div>
<Router>
  <Home/>
      <Routes>
            <Route path="/" element ={<h1 className='styleincss'>Hooks are functions that make functional components work like Class components  </h1>}/>  
            <Route path="/about" 
            element ={<div><h1 className='styleincss'>WELCOME TO HOME OF "USESTATE HOOK" </h1><p>Usestate hook is a function to add state(values or variables) in Functional Component</p><About /></div> }/>  

            <Route path="/contact" element ={<h1 className='styleincss'>WELCOME TO HOME OF SONY ERICSON <Contact/></h1>}/>  

            <Route path="/help" element ={<h1 className='styleincss'>WELCOME TO HOME OF SONY ERICSON <Help/></h1>}/>  


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
