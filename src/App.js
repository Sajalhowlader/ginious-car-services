import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About'
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login';
import ServicesDetails from './Pages/ServiceDetails/ServicesDetails';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';

function App() {
  return (
    <div >
      <Header />
      <Routes>
        <Route path='/' element={<Home></Home>} />
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/service/:serviceId' element={<ServicesDetails />} />
        <Route path='/login' element={<Login />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
