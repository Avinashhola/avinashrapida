import logo from './logo.svg';
import './App.css';
import Home from './Home';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Home/>
        <img src={logo} className="App-logo" alt="logo" />
      <Footer/>
      </header>
      
    </div>
  );
}

export default App;
