import { Navigate } from 'react-router-dom';
import { useSelector } from "react-redux";
import { selectUserInfo } from "../store/userSlice";
function PrivateRoute({ children }) {
    const userInfo = useSelector(selectUserInfo);
    return userInfo.isLoggin ? children : <Navigate to="/login" />;
}

export { PrivateRoute }