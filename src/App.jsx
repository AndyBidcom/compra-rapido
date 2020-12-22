import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/App.css';
import Hero from './components/Home/Hero';
import NavBar from './components/Home/NavBar';
import ItemListContainer from './components/Product/ItemListContainer';
import ItemDetailContainer from './components/Product/ItemDetailContainer';
import Footer from './components/Home/Footer';

function App() {
  return (
    <>
      <NavBar/>      
      <ItemDetailContainer />
      <ItemListContainer/>
      <Footer/>   
    </>    
  );
}

export default App;
