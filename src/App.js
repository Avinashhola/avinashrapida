// import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
<Router>
  <Home/>
      <Routes>
            <Route path="/" element ={<h1 className='styleincss'>WELCOME TO HOME OF LOGO </h1>}/>  
            <Route path="/about" element ={<h1 className='styleincss'>WELCOME TO HOME OF  </h1>}/>  

            <Route path="/contact" element ={<h1 className='styleincss'>WELCOME TO HOME OF SONY ERICSON </h1>}/>  

            <Route path="/help" element ={<h1 className='styleincss'>WELCOME TO HOME OF SONY ERICSON </h1>}/>  


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
