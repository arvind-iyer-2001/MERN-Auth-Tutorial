import { Navigate, Outlet } from 'react-router-dom'
import { useAuthContext } from '../hooks/auth/useAuthContext';

const AuthRoutes = () => {
    const { user } = useAuthContext();
    return (
        !(user && user.token) ? <Outlet/> : <Navigate to='/'/>
    )
}

export default AuthRoutes