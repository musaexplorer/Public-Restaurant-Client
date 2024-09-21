import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

const PrivateRoute = ({ children }) => {

    const { user, loading } = useAuth();
    console.log(user)

    const location = useLocation()
    console.log(loading)

    if (loading) {
        return (<div className='bg-black flex justify-center mx-auto min-h-screen'>
            <div className="wrapper ">
                <div className="circle" />
                <div className="circle" />
                <div className="circle" />
                <div className="shadow" />
                <div className="shadow" />
                <div className="shadow" />
            </div>
        </div>

        )
    }

    if (user) {
        return children
    }

    return <Navigate state={location.pathname} to={'/login'}></Navigate>
};

export default PrivateRoute;