import { Provider } from 'react-redux';
import Header from './components/Header';
import { Routes, BrowserRouter as Router, Route } from 'react-router-dom';

import Signup from './components/SignUp';
import Products from './components/Products';
import Home from './components/Home';
import Login from './components/Login';
import Footer from './components/Footer';

import { store } from './redux/store';
import './App.scss';

function App() {
  return (
    <Provider store={store}>
      <Router>
      <div className="App">
        <Header/>
        <Routes>
          <Route exact path="/" element={<Home/>}></Route>
          <Route path="/home" element={<Home/>}></Route>
          <Route path="/products" element={<Products/>}></Route>
          <Route path="/register" element={<Signup/>}></Route>
          <Route path="/signin" element={<Login/>}></Route>
          <Route path="/cart" element={<Products openCart={true} />}></Route>
        </Routes>
        <Footer/>
      </div>
      </Router>
    </Provider>
  );
}

export default App;
