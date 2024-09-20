import { useState } from "react";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";
import { Helmet } from "react-helmet-async";

const SignUp = () => {
    const {createUser, update, googleSignIn} = useAuth();
    const navigate = useNavigate();
    const [showPassword, setShowPassWord] = useState(null);
    const [errorMessage, setErrorMessage] = useState(null);
    const [success, setSuccess] = useState(null);

    const handleRegistration = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;
        console.log(name, email, password, photo);

        setErrorMessage(null);
        setSuccess(null);
        if (password.length > 6) {
            setErrorMessage('Password should have at least 6 character');
            return;
        } else if (!/[A-Z]/.test(password)) {
            setErrorMessage('Password should have at least one uppercase');
            return;
        }

        createUser(email,password)
        .then(res => {
            console.log(res.user)
            update(name,photo)
            .then()
            .catch()

            // const createdAt = res.user?.metadata?.creationTime;
            // const lastLoginAt = res.user?.metadata?.lastLoginAt;
            // const user = {email, createdAt: createdAt, lastLoginAt:lastLoginAt};
            // fetch('https://tourism-management-server-phi.vercel.app/user',{
            //     method: 'POST',
            // headers: {
            //     'content-type': 'application/json'
            // },
            // body: JSON.stringify(user)
            // })
            // .then(res => res.json())
            // .then(data => {
            //     if(data.insertedId){
            //       Swal.fire({
            //         position: 'top-end',
            //         icon: 'success',
            //         title: 'User added to the database',
            //         showConfirmButton: false,
            //         timer: 1500
            //     })
            //     }
            // })
        })
        .catch(error =>{
            console.error(error);
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
                <title>BBQHOUSE || SIGNUP</title>
            </Helmet>
            <div data-aos="zoom-in" className="hero">
                <div className="hero-content bg-[url('')] flex-col lg:flex-row-reverse">

                    <div data-aos="zoom-in-up" className="card w-full max-w-sm shrink-0">
                        <form onSubmit={handleRegistration} className="card-body">
                            <h2 className="text-3xl font-bold text-center uppercase">Create Account</h2>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-serif italic ">Name</span>
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="name"
                                    className="input input-bordered border-0 border-b-4"
                                    required />
                            </div>

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
                                        className="input input-bordered border-0 border-b-4 w-full"
                                        required
                                    />
                                </div>
                                <span className="absolute text-2xl top-[305px] right-10" onClick={() => setShowPassWord(!showPassword)}>
                                    {
                                        showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                                    }
                                </span>

                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-serif italic ">PhotoURL</span>
                                </label>
                                <input
                                    type="text"
                                    name="photo"
                                    placeholder="photoURL"
                                    className="input input-bordered border-0 border-b-4"
                                    required />
                            </div>

                            <div className="form-control mt-6">
                                <button className="btn bg-yellow-600 font-bold uppercase text-white hover:text-yellow-600 font-serif hover:bg-white">Sign Up</button>
                            </div>

                            <div className="text-center">
                                <p className="font-serif ">Go to <Link className="text-sky-500 font-bold uppercase" to='/login'>Login</Link> Page</p>
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
                    <img className="w-[1100px] h-[650px]" src="/public/Images/Halloumi Burgers.jpeg" alt="" />
                </div>
            </div>
        </div>
    );
};

export default SignUp;