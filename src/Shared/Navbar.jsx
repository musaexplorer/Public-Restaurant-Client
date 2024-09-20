import { Link, NavLink } from "react-router-dom";
import logos from "../../public/Images/FoodLogos-removebg-preview.png";
import useAuth from "../Hooks/useAuth";
import { useState } from "react";
import { CgMenuGridO } from "react-icons/cg";

const Navbar = () => {
    // const { user, logOut } = useAuth();
    // const handleSignOut = () => {
    //     logOut()
    //         .then()
    //         .catch()
    // }

    // const navItems = <>
    //     <li className="font-bold italic font-serif text-white hover:underline focus:bg-black"><Link to='/'>Home</Link></li>
    //     <li className="font-bold italic font-serif text-white hover:underline focus:bg-black"><Link to='/allfoods'>All Food Item</Link></li>
    //     <li className="font-bold italic font-serif text-white hover:underline focus:bg-black"><Link to='/blog'>Blog</Link></li>
    //     <li className="font-bold italic font-serif text-white hover:underline focus:bg-black"><Link>Menu</Link></li>
    // </>

    const { user, logOut } = useAuth()
    const [visible, setVisible] = useState(false);
    const [toggle, setToggle] = useState(false);
    const handleSignOut = () => {
        logOut()
        .then()
        .catch()
    }

    const link = (
        <>
            <NavLink className="text-lg hover:text-[#EEEEEE] rounded-lg hover:bg-[#dac936] px-3 py-2 font-semibold text-[#00ADB5] ml-2" to={"/"}>Home</NavLink>

            <NavLink className="text-lg hover:text-[#EEEEEE] rounded-lg hover:bg-[#dac936] px-3 py-2 font-semibold text-[#00ADB5] ml-2" to={"/item"}>All Foods</NavLink>

            <NavLink className="text-lg hover:text-[#EEEEEE] rounded-lg hover:bg-[#dac936] px-3 py-2 font-semibold text-[#00ADB5] ml-2" to={"/blog"}>Blog</NavLink>

            <NavLink className="text-lg hover:text-[#EEEEEE] rounded-lg hover:bg-[#dac936] px-3 py-2 font-semibold text-[#00ADB5] ml-2" to={"/menu"}>Menu</NavLink>

            {
                user ? '' : <NavLink
                    className="text-lg hover:text-[#EEEEEE] rounded-lg hover:bg-[#00ADB5] px-3 py-2 font-semibold text-[#00ADB5]  ml-2 "
                    to={"/login"}
                >
                    Login
                </NavLink>
            }

        </>
    );

    return (
        <div>
            <div className="text-[#00ADB5] bg-[#393E46] border-b-[6px] border-[#f0d76b]">
                <div className="navbar">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label
                                onClick={() => {
                                    setToggle(!toggle);
                                }}
                                tabIndex={0}
                                className="btn btn-ghost lg:hidden"
                            >
                                <CgMenuGridO className="text-[#00ADB5] text-2xl"></CgMenuGridO>
                            </label>
                            <ul
                                tabIndex={0}
                                className={`menu ${toggle ? "" : "hidden"
                                    } menu-sm navDatat space-y-3 lg:hidden absolute z-[1] px-2 py-3 shadow border border-[#00ADB5] bg-[#393E46] rounded-box w-52`}
                            >
                                {link}
                            </ul>
                        </div>
                        <a className=" text-xl font-bold"><img className="w-40" src={logos} alt="" /></a>
                    </div>
                    <div className="navbar-end gap-10">

                        <div className=" hidden lg:flex">
                            <ul className="menu menu-horizontal px-1 navbarLink"> <NavLink className=" font-semibold text-[#e6dc5d] font-serif italic hover:border-b-[3px] hover:border-[#EEEEEE] border-b-[3px] border-[#393E46] ml-7 " to={"/"}>Home</NavLink>

                            <NavLink className="font-semibold text-[#e6dc5d] font-serif italic hover:border-b-[3px] hover:border-[#EEEEEE] border-b-[3px] border-[#393E46] ml-7 " to={"/item"}>All Foods</NavLink>

                            <NavLink className="font-semibold text-[#e6dc5d] font-serif italic hover:border-b-[3px] hover:border-[#EEEEEE] border-b-[3px] border-[#393E46] ml-7 " to={"/blog"}>Blog</NavLink>

                            <NavLink className="font-semibold text-[#e6dc5d] font-serif italic hover:border-b-[3px] hover:border-[#EEEEEE] border-b-[3px] border-[#393E46] ml-7 " to={"/menu"}>Menu</NavLink>

                            {
                                user ? '' : <NavLink className=" font-semibold text-[#e6dc5d] font-serif italic hover:border-b-[3px] hover:border-[#EEEEEE] border-b-[3px] border-[#393E46] ml-7" to={"/login"}>Login</NavLink>
                            }
                            </ul>
                        </div>
                        <div className={`${user ? '' : 'hidden'}`}>
                            <div className="dropdown dropdown-end">
                                <label
                                    onClick={() => {
                                        setVisible(!visible);
                                    }}
                                    tabIndex={0}
                                    className="btn btn-ghost btn-circle avatar"
                                >
                                    <div className="w-10 rounded-full border-2 text-[#e6dc5d]">
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
                                    <Link className="py-2 px-3 font-serif font-semibold rounded-xl">
                                        {user?.displayName}
                                    </Link>
                                    <Link to={"/myadded"} className="py-2 text-[#e6dc5d] font-serif italic hover:bg-yellow-600 px-3 font-semibold rounded-xl hover:text-[#EEEEEE]">My Added Food</Link>

                                    <Link to={"/addfood"} className="py-2 text-[#e6dc5d] font-serif italic hover:bg-yellow-600 px-3 font-semibold rounded-xl hover:text-[#EEEEEE]">Add Food</Link>

                                    <Link to={"ordered"} className="py-2 text-[#e6dc5d] font-serif italic hover:bg-yellow-600 px-3 font-semibold rounded-xl hover:text-[#EEEEEE]">Order Food</Link>
                                    <Link
                                        onClick={handleSignOut}
                                        className="py-2 text-sky-300 font-serif italic hover:bg-yellow-600 px-3 font-semibold rounded-xl hover:text-[#EEEEEE]"
                                    >
                                        Logout
                                    </Link>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className="">
                {/* <div className="navbar-start">
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
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-gray-500 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {navItems}
                        </ul>
                    </div>
                    <img className="w-40" src={logos} alt="" />
                </div> */}
                {/* <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navItems}
                        {
                            user ? <>
                                <span className="font-bold">{user?.displayName}</span>
                                <img className="w-7 lg:w-10 rounded-full" src={user?.photoURL} />
                                <button onClick={handleSignOut} className="btn text-white bg-teal-500 hover:text-teal-500 hover:bg-white font-bold">Log Out</button>
                            </>
                                :
                                <Link to="/login"><button className="btn text-white bg-teal-500 font-bold hover:text-teal-500 hover:bg-white">Login</button></Link>
                        }
                    </ul>
                </div> */}
                {/* <div className="navbar-end">
                    <a className="btn">Button</a>
                </div> */}
            </div>
        </div>
    );
};

export default Navbar;