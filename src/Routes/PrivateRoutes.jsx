import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate,useLocation } from "react-router-dom";

const PrivateRoutes = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const loaction = useLocation()

    if (loading) {
        return <p>Mammah Loading</p>
    }
    
    if (user) {
        return children
    }

    return <Navigate to="/login" state={location?.pathname || "/"}></Navigate>
};

export default PrivateRoutes;