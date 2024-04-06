import { Link } from "react-router-dom";
import Navbar from "../../Components/Navbar";


const Register = () => {
    return (
        <div className="hero ">
        <div className="hero-content flex-col w-full">
            <div className="text-center">
                <h1 className="text-5xl font-bold mb-4">Register now!</h1>
            </div>
            <div className="card w-[30%] shadow-2xl bg-white">
                <form className="card-body w-full">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-gray-700">Email</span>
                        </label>
                        <input type="email" placeholder="Email" className="input input-bordered text-gray-700 bg-transparent border-gray-300 " required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-gray-700">Password</span>
                        </label>
                        <input type="password" placeholder="Password" className="input input-bordered text-gray-700 bg-transparent border-gray-300 " required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover text-gray-700">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-4">
                        <button className="btn btn-primary">Register</button>
                    </div>
                    <div className="mt-4">
                        <p className="text-gray-700 text-sm">Do Not Have Account ? <Link className="text-blue-600 font-semibold" to={"/login"}>Login</Link> </p>
                    </div>
                </form>
            </div>
        </div>
    </div>
    );
};

export default Register;