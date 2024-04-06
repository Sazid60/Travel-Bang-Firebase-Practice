import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";

const MainLayout = () => {
    return (
        <div className="bg-cover bg-center min-h-screen" style={{
            backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url('../../public/Rectangle 1.png')"
        }}>
            <div className="container mx-auto  text-white pt-8">
                <Navbar />
                <Outlet />
            </div>

        </div>
    );
};

export default MainLayout;
