import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About'
import AddService from './Pages/AddService/AddService';
import CustomerOrder from './Pages/CustomerOrder/CustomerOrder';
import BookService from './Pages/Home/BookService/BookService';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login';
import Register from './Pages/Login/Register/Register';
import ManageService from './Pages/ManageServices/ManageService';
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
        <Route path='/checkout' element={<AddService />}></Route>
        <Route path='/manageServices' element={<ManageService />}></Route>
        <Route path='/orders' element={<CustomerOrder />} />
        <Route path='bookService/:serviceId' element={<BookService />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
