import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";



const Register = () => {
    const [success,setSuccess] = useState("")
    const[errorMessage, setErrorMessage] = useState("")


    const {signUp} = useContext(AuthContext)

const handleRegister =(e)=>{
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const email = form.get("email")
    const password = form.get("password")
    console.log(email,password)
    setSuccess("")
    setErrorMessage("")

    signUp(email,password)
    .then(()=>{
    setSuccess("Successfully Registered")
    })
    .catch(error=>{
        setErrorMessage(error.message)
    })
}
    return (
        <div className="hero ">
        <div className="hero-content flex-col w-full">

            <div className="text-center">
                <h1 className="text-5xl font-bold mb-4">Register now!</h1>
            </div>
            <div className="card w-[30%] shadow-2xl bg-white">
                <form className="card-body w-full" onSubmit={handleRegister}>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-gray-700 text-xs">Name</span>
                        </label>
                        <input type="text" placeholder="Your Name" name="name" className="input input-bordered text-gray-700 bg-transparent border-gray-300 " required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-gray-700 text-xs">Email</span>
                        </label>
                        <input type="email" placeholder="Email" name="email" className="input input-bordered text-gray-700 bg-transparent border-gray-300 " required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-gray-700 text-xs">Password</span>
                        </label>
                        <input type="password" placeholder="Password" name="password" className="input input-bordered text-gray-700 bg-transparent border-gray-300 " required />
                        {
                            errorMessage && <p className='text-red-500 text-xs mt-4'>Error :{errorMessage} </p>
                        }
                        {
                            success && <p className='text-blue-700 text-xs mt-4'>{success}</p>
                        }
                    </div>
                    <div className="form-control mt-4">
                        <button className="btn btn-primary">Register</button>
                    </div>
                    <div className="mt-4 text-center">
                        <p className="text-gray-700 text-sm">Do Not Have Account ? <Link className="text-blue-600 font-semibold" to={"/login"}>Login</Link> </p>
                    </div>
                </form>
            </div>
        </div>
    </div>
    );
};

export default Register;