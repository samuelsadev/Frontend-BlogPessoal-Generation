import './App.css';
import Home from "../src/pages/home/Home"
import NavBar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Login from './pages/home/Login';
function App() {
  return (
    <>
    <BrowserRouter>
      <NavBar />
        <div className="min-h-[60vh]">
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/login' element={<Login />}></Route>
            <Route path='/home' element={<Home />}></Route>
          </Routes>
        </div>
          <Footer />
    </BrowserRouter>
    </>
  );
}
export default App;