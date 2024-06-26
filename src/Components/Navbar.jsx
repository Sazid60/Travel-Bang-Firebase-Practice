import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";


const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)
    // const [success, setSuccess] = useState("")
    // const [errorMessage, setErrorMessage] = useState("")

    const handleSignOut = () => {

        logOut()
            .then(() => {
                console.log("Logged Out")
            })
            .catch(error => {
                console.log(error.message)
            })
    }
    const links = <>
        <li><Link to={"/"}>Home</Link></li>
        <li><Link to={"/destination"}>Destination</Link></li>
        <li><Link to={"/blog"}>Blog</Link></li>
        <li><Link to={"/contact"}>Contact</Link></li>
    </>
    return (
        <div className="navbar text-white">
            <div className="navbar-start">

                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {links}
                    </ul>
                </div>

                <div className="flex items-center gap-60">
                    <img className="" src="/logo.png" alt="" />
                </div>
            </div>

            <div className=" hidden lg:flex w-[30%]">
                <input type="text" placeholder="Search" className="input input-bordered w-full flex-grow bg-white bg-opacity-40" />
            </div>


            <div className="navbar-end">
                <div className="navbar-center hidden lg:flex mr-10">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                {user ?
                    <div className="flex items-center gap-4">
                        <button className="btn btn-ghost bg-[#F9A51A]" onClick={handleSignOut}>Sign out</button>
                        <div className="">
                            <img className="rounded-full h-14 w-14" src={user.photoURL} alt="" />
                        </div>
                    </div> :
                    <div className="flex items-center gap-4">
                        <Link to={"/login"}>
                            <button className="btn btn-ghost bg-[#F9A51A]">Login</button>
                        </Link>
                        <div className="">
                            <img className="rounded-full h-14 w-14" src="/Capture.PNG" alt="" />
                        </div>
                    </div>

                }
            </div>
        </div>
    );
};

export default Navbar;