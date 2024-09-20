import foologos from "../../public/Images/FoodLogos-removebg-preview.png"

const Footer = () => {
    return (
        <div>
            <footer className="footer bg-gray-500 text-base-content p-10">
                <div>
                    <img src={foologos} alt="" />
                </div>
                <nav>
                    <h6 className="footer-title italic text-white">Services</h6>
                    <a className="link link-hover italic text-white hover:text-sky-400">Branding</a>
                    <a className="link link-hover italic text-white hover:text-sky-400">Design</a>
                    <a className="link link-hover italic text-white hover:text-sky-400">Marketing</a>
                    <a className="link link-hover italic text-white hover:text-sky-400">Advertisement</a>
                </nav>
                <nav>
                    <h6 className="footer-title italic text-white">Company</h6>
                    <a className="link link-hover italic text-white hover:text-sky-400">About us</a>
                    <a className="link link-hover italic text-white hover:text-sky-400">Contact</a>
                    <a className="link link-hover italic text-white hover:text-sky-400">Jobs</a>
                    <a className="link link-hover italic text-white hover:text-sky-400">Press kit</a>
                </nav>
                <nav>
                    <h6 className="footer-title italic text-white">Legal</h6>
                    <a className="link link-hover italic text-white hover:text-sky-400">Terms of use</a>
                    <a className="link link-hover italic text-white hover:text-sky-400">Privacy policy</a>
                    <a className="link link-hover italic text-white hover:text-sky-400">Cookie policy</a>
                </nav>
            </footer>
            <footer className="footer footer-center bg-gray-400 text-base-content p-4">
                <aside>
                    <p className="font-semibold text-white italic">Copyright © {new Date().getFullYear()} - All right reserved by BarBeeQ chill & gril</p>
                </aside>
            </footer>
        </div>
    );
};

export default Footer;