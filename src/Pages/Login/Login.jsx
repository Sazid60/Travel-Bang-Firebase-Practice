import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { useContext, useState } from "react";
import { FaFacebook, FaGithub, FaGoogle, FaTwitter } from "react-icons/fa";



const Login = () => {
    const { signIn,googleSignIn,gitHubSignIn,twitterSignIn,facebookSignIn } = useContext(AuthContext)
    const [success, setSuccess] = useState("")
    const [errorMessage, setErrorMessage] = useState("")


    const handleSignIn = (e) => {
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        const email = form.get("email")
        const password = form.get("password")
        setSuccess("")
        setErrorMessage("")

        signIn(email, password)
            .then(() => {
                setSuccess("Logged In Successful")
            })
            .catch(error => {
                setErrorMessage(error.message)
            })

    }
    return (
        <div className="hero ">
            <div className="hero-content flex-col w-full">
                <div className="text-center">
                    <h1 className="text-5xl font-bold mb-4">Login now!</h1>
                </div>
                <div className="card w-[30%] shadow-2xl bg-white">
                    <form className="card-body w-full" onSubmit={handleSignIn}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-gray-700 text-sm">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="Email" className="input input-bordered text-gray-700 bg-transparent border-gray-300 " required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-gray-700 text-sm">Password</span>
                            </label>
                            <input type="password" placeholder="Password" name="password" className="input input-bordered text-gray-700 bg-transparent border-gray-300 " required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover text-gray-700 text-sm">Forgot password?</a>
                            </label>
                            {
                                errorMessage && <p className='text-red-500 text-xs mt-4'>Error :{errorMessage} </p>
                            }
                            {
                                success && <p className='text-blue-700 text-xs mt-4'>{success}</p>
                            }
                        </div>
                        <div className="form-control mt-4">
                            <button className="btn btn-primary">Login</button>
                        </div>
                        <div className="mt-4 text-center">
                            <p className="text-gray-700 text-sm">Do Not Have Account ? <Link className="text-blue-600 font-semibold" to={"/register"}>Register</Link> </p>
                        </div>
                    </form>
                    <div className="divider text-gray-700">Continue With</div>
                    <div className="flex justify-center gap-4 mb-6">
                        <button className="btn rounded-full" onClick={()=>googleSignIn()}><FaGoogle /></button>
                        <button className="btn rounded-full" onClick={()=>gitHubSignIn()}><FaGithub /></button>
                        <button className="btn rounded-full" onClick={()=>twitterSignIn()}><FaTwitter /></button>
                        <button className="btn rounded-full" onClick={()=>facebookSignIn()}><FaFacebook /></button>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Login;