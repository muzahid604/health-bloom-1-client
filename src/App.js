import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Appointment from './Pages/Appointment/Appointment';
import Header from './Pages/Common/Header/Header';
import Home from './Pages/Home/Home/Home';
import SignUp from './Pages/Login/SignUp/SignUp';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route >
        <Route path='/appointment' element={<Appointment />}></Route>
        <Route path='/login' element={<SignUp />}></Route>
      </Routes>
    </div>
  );
}

export default App;
