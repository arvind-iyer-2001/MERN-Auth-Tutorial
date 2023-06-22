import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useAuthContext } from './hooks/auth/useAuthContext';
// pages & components
import Navbar from './component/Navbar'

import Home from './views/Home'
import Login from './views/Login';
import Register from './views/Register';
import PrivateRoutes from './component/PrivateRoutes';
import AuthRoutes from './component/AuthRoutes';

function App() {
  const { user } = useAuthContext();

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route  element={<PrivateRoutes/>}  >
              <Route  path='/'  element={ <Home />}/>
            </Route>

            <Route  element={<AuthRoutes/>}  >
              <Route  path='/login'  element={ <Login /> }/>
              <Route  path='/register'  element={ <Register /> }/>
            </Route>


          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;