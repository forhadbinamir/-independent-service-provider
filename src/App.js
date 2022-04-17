import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Shared/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Footer from './Shared/Footer/Footer';
import Home from './Pages/Home/Home';
import Services from './Pages/Home/Services';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import About from './Pages/Home/About/About';
import Checkout from './Pages/CheckOut/Checkout';
import NotFound from './Pages/NotFound/NotFound';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/services' element={<Services></Services>}></Route>
        <Route path='/service/:serviceDetails' element={

          <Checkout></Checkout>

        }></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
