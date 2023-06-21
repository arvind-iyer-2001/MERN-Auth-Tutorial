import { Link } from 'react-router-dom'
import { useLogout } from '../hooks/auth/useLogout';
import { useAuthContext } from '../hooks/auth/useAuthContext';

const Navbar = () => {
  const {logout} = useLogout();
  const {user} = useAuthContext();

  const handleClick = async () => {
    await logout();
  };

  return (
    <header>
      <div className="container">
        <Link to="/">
          <h1>Workout Buddy</h1>
        </Link>
        <nav>
          {user && (
            <div>
              <span>{user.email}</span>
              <button onClick={handleClick}>Log out</button>
            </div>
          )}
          {!user && (
            <div>
              <Link to="/login">Login</Link>
              <Link to="/register">Sign Up</Link>
            </div>
          )}
        </nav>
      </div>
    </header>
  )
}

export default Navbar