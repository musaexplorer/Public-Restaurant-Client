import { Link, } from "react-router-dom";
import logos from "../../public/Images/FoodLogos-removebg-preview.png";
import useAuth from "../Hooks/useAuth";
import { useState } from "react";


const Navbar = () => {
    const { user, logOut } = useAuth();
    const [visible, setVisible] = useState(false);
    // const [toggle, setToggle] = useState(false);
    const handleSignOut = () => {
        logOut()
            .then()
            .catch()
    }

    const navItems = <>
        <li className="font-bold lg:text-xs text-[9px] italic font-serif text-yellow-500 hover:underline focus:bg-black"><Link to='/'>Home</Link></li>
        <li className="font-bold lg:text-xs text-[9px] italic font-serif text-yellow-500 hover:underline focus:bg-black"><Link to='/item'>All Food Item</Link></li>
        <li className="font-bold lg:text-xs text-[9px] italic font-serif text-yellow-500 hover:underline focus:bg-black"><Link to='/blog'>Blog</Link></li>
        <li className="font-bold lg:text-xs text-[9px] italic font-serif text-yellow-500 hover:underline focus:bg-black"><Link to='/menu'>Menu</Link></li>
        <li className="font-bold lg:text-xs text-[9px] italic font-serif text-yellow-500 hover:underline focus:bg-black">
            {
                user ? '' : <Link
                    className="font-bold italic font-serif text-yellow-500 hover:underline" to={"/login"}>Login</Link>
            }
        </li>

        <div className="">
            <div className={`${user ? '' : 'hidden'}`}>
                <div className="dropdown dropdown-right">
                    <label
                        onClick={() => {
                            setVisible(!visible);
                        }}
                        tabIndex={0}
                        className="btn btn-ghost btn-circle avatar"
                    >
                        <div className="w-10 rounded-full border-2 text-white">
                            <img
                                alt="Tailwind CSS Navbar component"
                                src={user?.photoURL || '/images/user.png'}
                                className=" rounded-full"
                            />
                        </div>
                    </label>
                    <ul
                        tabIndex={0}
                        className={`menu ${visible ? "" : "hidden"
                            } bg-[#393E46] menu-sm absolute -left-[180px] z-[1] p-2 shadow-xl border border-yellow-500 rounded-box w-52`}
                    >
                        <Link className="py-2 px-3 font-serif font-semibold rounded-xl text-white uppercase text-xs">
                            {user?.displayName}
                        </Link>
                        <Link to={"/addfood"} className="py-2 text-yellow-500 font-serif italic hover:bg-yellow-600 px-3 font-semibold rounded-xl hover:text-[#EEEEEE]">Add Food</Link>
                        <Link to={"ordered"} className="py-2 text-yellow-500 font-serif italic hover:bg-yellow-600 px-3 font-semibold rounded-xl hover:text-[#EEEEEE]">Order Food</Link>
                        <Link onClick={handleSignOut} className="py-2 text-yellow-500 font-serif italic hover:bg-yellow-600 px-3 font-semibold rounded-xl hover:text-[#EEEEEE]">Logout</Link>
                    </ul>
                </div>
            </div>
        </div>
    </>

    return (
        <div>
            <div className="navbar bg-gray-600 justify-center">
                <a className=""><img className="w-40 bg-gray-600" src={logos} alt="" /></a>
            </div>
            <div className="navbar navbar-center bg-gray-800">
                <div className="">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        {/* <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-gray-600 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {navItems}
                        </ul> */}
                    </div>
                </div>
                <div className="navbar-center flex justify-center lg:ml-[420px]">
                    <ul className="menu menu-horizontal px-1">
                        {navItems}
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default Navbar;