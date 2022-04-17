 
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Blogs from './components/Blogs/Blogs';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import LogIn from './components/LogIn/LogIn';
import NotFound from './components/NotFound/NotFound';
import Register from './components/Register/Register';
import Services from './components/Services/Services';

function App() {
  return (
    <div>
      <Header />
        <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/about' element={<About />}></Route>
                <Route path='/services' element={<Services />}></Route>
                <Route path='/login' element={<LogIn />}></Route>
                <Route path='/register' element={<Register />}></Route>
                <Route path='/blogs' element={<Blogs />}></Route>
                <Route path='*' element={<NotFound />}></Route>
            </Routes>
            <Footer />
    </div>
  );
}

export default App;
