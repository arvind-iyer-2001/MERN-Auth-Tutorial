import { BrowserRouter, Routes, Route } from 'react-router-dom'

// pages & components
import Navbar from './component/Navbar'

import Home from './views/Home'
import Login from './views/Login';
import Register from './views/Register';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route 
              path="/"
              element={<Home />}
            />
            <Route 
              path="/login"
              element={<Login />}
            />
            <Route 
              path="/register"
              element={<Register />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;