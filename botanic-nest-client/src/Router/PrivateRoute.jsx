
import { Navigate, useLocation } from 'react-router';
import { AuthContext } from '../Context/AuthContext';
import { useContext } from 'react';


const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();


    if (loading) {
        return <div className='flex justify-center min-h-screen items-center'>
            <span className="loading loading-ring loading-xl "></span>
        </div>
    }

    if (user) {
        return children;
    }

    return <Navigate state={location.pathname}
        to="/login" />;
};

export default PrivateRoute;
