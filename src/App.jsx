import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.svg';
import './styles/App.css';
import Hero from './components/Home/Hero';
import NavBar from './components/Home/NavBar';
import Footer from './components/Home/Footer';

function App() {
  return (
    <>
      <div className="container">
        <header>
          <div className="row">
            <div className="col-2"><img src={logo} className="App-logo" alt="logo" /></div>
            <div className="col-10"><NavBar/></div>
          </div>
        </header>
        <Hero/>
      </div>   
      <Footer/>   
    </>    
  );
}

export default App;
