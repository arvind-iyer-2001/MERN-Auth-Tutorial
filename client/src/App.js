import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useAuthContext } from './hooks/auth/useAuthContext';
// pages & components
import Navbar from './component/Navbar'

import Home from './views/Home'
import Login from './views/Login';
import Register from './views/Register';

function App() {
  const { user } = useAuthContext();

   

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route 
              path="/"
              element={
                user  
                ? <Home />
                : <Navigate to="/login"/>
              } 
            />
            <Route 
              path="/login"
              element={
                !user  
                ? <Login />
                : <Home />
              }
            />
            <Route 
              path="/register"
              element={
                !user  
                ? <Register />
                : <Home />
              }
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;