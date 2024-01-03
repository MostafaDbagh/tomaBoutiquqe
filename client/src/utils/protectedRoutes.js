import { Navigate } from 'react-router-dom';
import {  useSelector } from 'react-redux/es/hooks/useSelector';
import Home from '../pages/home';
const ProtectedRoutes = (Component) => {

const isAuth = useSelector(state =>state.auth.isAuthenticated)

    return isAuth ? <Component /> : <Home />
}

export default ProtectedRoutes