import {BrowserRouter, Switch, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/App.css';
import NavBar from './components/Home/NavBar';
import NotFound from './components/404/NotFound';
import ItemListContainer from './components/Product/ItemListContainer';
import ItemDetailContainer from './components/Product/ItemDetailContainer';
import Footer from './components/Home/Footer';

function App() {
  return (
    <BrowserRouter>
      <NavBar/> 
      <Switch>
        <Route exact path="/">
          <ItemListContainer/>
        </Route>
        <Route path="/detail/:item_id">
          <ItemDetailContainer/>
        </Route>
        <Route path="/category/:category_name">
          <ItemListContainer/>
        </Route>        
        <Route path="*">
          <NotFound/>
        </Route>
      </Switch>     
      <Footer/>   
    </BrowserRouter>
  );
}

export default App;
