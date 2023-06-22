import { Navigate, Outlet } from 'react-router-dom'
import { useAuthContext } from '../hooks/auth/useAuthContext';

const PrivateRoutes = () => {
    const { user } = useAuthContext();
    return (
        user && user.token ? <Outlet/> : <Navigate to='/login'/>
    )
}

export default PrivateRoutes