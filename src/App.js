import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Shared/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Footer from './Shared/Footer/Footer';
import Home from './Pages/Home/Home';
import Services from './Pages/Home/Services';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/service' element={<Services></Services>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
