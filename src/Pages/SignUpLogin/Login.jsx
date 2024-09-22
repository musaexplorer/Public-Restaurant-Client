import { useState } from "react";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const Login = () => {
    const {signInUser, googleSignIn} = useAuth();
    const [showPassword, setShowPassWord] = useState(null);
    const [errorMessage, setErrorMessage] = useState(null);
    const [success, setSuccess] = useState(null);
    const navigate = useNavigate();

    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        setErrorMessage(null);
        setSuccess(null);
        if (password.length > 6) {
            setErrorMessage('Password should have at least 6 character');
            return;
        } else if (!/[A-Z]/.test(password)) {
            setErrorMessage('Password should have at least one uppercase');
            return;
        }

        signInUser( email, password)
        .then(res => {
            console.log(res.user)
            Swal.fire(
              'Good job!',
              'You are logeed in Successfully',
              'success'
            )
            { location.state ? navigate(location.state) : navigate('/') }
            
        })
        .catch(err => {
            console.log(err)
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: "Your password and email doesn't match",
            })
        })
    };

    const handleGoogle =()=>{
        googleSignIn()
        .then(res => {
            console.log(res.user)
            Swal.fire({
              title: 'Your account have been created.',
              width: 600,
              padding: '3em',
              color: '#716add',
              background: '#fff url(/images/trees.png)',
              backdrop: `
                rgba(0,0,123,0.4)
                url("/images/nyan-cat.gif")
                left top
                no-repeat
              `
            })

           navigate('/')
            
        })
        .catch(err => {
            console.log(err)
        })
    }

    return (
        <div>
            <Helmet>
                <title>BBQHOUSE || LOGIN</title>
            </Helmet>
            <div data-aos="zoom-in" className="hero ">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img className="w-[1100px] h-[650px]" src="/Images/Halloumi Burgers.jpeg" alt="" />

                    <div data-aos="zoom-in-up" className="card w-full max-w-sm shrink-0l">
                        <form onSubmit={handleLogin} className="card-body">
                            <h2 className="text-3xl font-bold text-center uppercase">Login Now</h2>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-serif italic ">Email</span>
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="email"
                                    className="input input-bordered border-0 border-b-4"
                                    required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-serif italic">Password</span>
                                </label>
                                <div className="relative">
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        name="password"
                                        placeholder="password"
                                        className="input input-bordered w-full border-0 border-b-4"
                                        required
                                    />
                                </div>
                                <span className="absolute text-2xl top-[215px] right-10" onClick={() => setShowPassWord(!showPassword)}>
                                    {
                                        showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                                    }
                                </span>
                            </div>

                            <div className="form-control mt-6">
                                <button className="btn bg-yellow-600 text-white font-serif font-bold uppercase hover:text-yellow-600 hover:bg-white">Login</button>
                            </div>

                            <div className="text-center">
                                <p className="font-serif">Don't have an account please <Link className="text-sky-500 font-bold uppercase" to='/signup'>Sign Up</Link> Page</p>
                            </div>
                            <button onClick={handleGoogle} className="btn w-full text-black hover:text-white hover:bg-black font-serif font-bold py-2 flex items-center justify-center gap-3 px-4 rounded-md mt-4"><FaGoogle className="text-2xl text-orange-400"></FaGoogle> Continue With Google</button>
                        </form>
                        {
                            errorMessage && <p className="text-red-600 italic font-bold mb-10 text-center">{errorMessage}</p>
                        }
                        {
                            success && <p className="text-green-600 italic font-bold mb-10 text-center">{success}</p>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;