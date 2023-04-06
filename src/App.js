import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './Pages/Home';
import Checkout from './Pages/Checkout';
import Signup from './Pages/Signup';
import Login from './Pages/Login';
function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path='/checkout' element={
            <>
              <Navbar />
              <Checkout />
            </>
          }></Route>
          <Route path='/signup' element={<Signup />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/' element={
            <>
              <Navbar />
              <Home />
            </>
          }></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;

