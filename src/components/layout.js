import { Outlet, Link } from "react-router-dom";
import { useEffect, useState } from 'react'
import { FaBars } from "react-icons/fa"
import { AiOutlineClose } from "react-icons/ai"
import logo from '../assets/logo.png'
import { useLocation, useNavigate } from "react-router-dom/dist";
import Footer from "./footer";
import { motion, AnimatePresence } from "framer-motion"

const Layout = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const [currentUrl, setCurrentUrl] = useState('/')

    useEffect(() => {
        setCurrentUrl(location.pathname === '/' ? location.pathname : location.pathname.substring(1))
    }, [location])
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    return (
        <div className="bg-white">
            <header className="z-50 bg-salonlight sticky top-0 shadow-salon">
                <nav className="flex items-center justify-between lg:px-8">
                    <div className="flex lg:flex-1 items-center">
                        <Link to="/">
                            <img
                                className="h-16 w-auto rounded-full"
                                src={logo}
                                alt="logo"
                            />
                        </Link>
                        <span className="pl-2  leading-6 text-primary"> L'amour Nail Spa</span>
                    </div>
                    <div className="hidden lg:flex ">
                        {navigation.map((item) => (
                            <button key={item.name} onClick={() => navigate(`${item.href}`)} className={`${item.href.includes(currentUrl) ? 'bg-[#90B9A4] font-bold' : ''} w-28 h-16 transition ease-in-out duration-500 hover:border-b-4 hover:border-grey`}>
                                {item.name}
                            </button>
                        ))}
                    </div>
                    <div className="flex lg:hidden">
                        <button
                            type="button"
                            className="m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                            onClick={() => setMobileMenuOpen((curr) => !curr)}
                        >
                            {/* <FaBars className="h-6 w-6" aria-hidden="true" /> */}
                            {mobileMenuOpen ? <AiOutlineClose className="h-6 w-6" /> : <FaBars className="h-6 w-6" />}
                        </button>
                    </div>
                    <AnimatePresence>
                        {mobileMenuOpen && <motion.div initial={{ right: 0, width: 0 }}
                            animate={{ right: 0, width: 192 }}
                            exit={{ right: 0, width: 0 }}
                            transition={{ duration: 0.75, ease: "easeOut" }}
                            className="flex flex-col z-40 fixed right-0 top-16 bg-salonlight lg:hidden">
                            {navigation.map((item) => (
                                <button key={item.name} onClick={() => {
                                    navigate(`${item.href}`)
                                    setMobileMenuOpen(false)
                                }} className={`${item.href.includes(currentUrl) ?
                                    'bg-[#90B9A4] font-bold border-l-4 border-grey' : ''} 
                                    uppercase w-48 h-16 hover:border-l-4 transition ease-in-out duration-500`}>
                                    {item.name}
                                </button>
                            ))}
                        </motion.div>}
                    </AnimatePresence>
                </nav>
            </header>
            <div className="w-full  max-[364px]:pb-48 max-[436px]:pb-40 max-[500px]:pb-32 max-[640px]:pb-24 max-[904px]:pb-28 max-[1023px]:pb-16 lg:pb-36 min-[1280px]:pb-20 ">
                <Outlet />
            </div>
            <Footer />
        </div>
    )
};
export default Layout;

const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: 'service' },
    { name: 'About', href: 'about' },
    { name: 'Book Now', href: 'booking' },
    { name: 'E-Gift Card', href: 'giftcard' },
    { name: 'Contact', href: 'contact' },
]