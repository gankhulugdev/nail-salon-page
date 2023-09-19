import { Outlet, Link } from "react-router-dom";
import { useEffect, useState } from 'react'
import { FaBars } from "react-icons/fa"
import { AiOutlineClose } from "react-icons/ai"
import logo from '../assets/logo.png'
import { useLocation, useNavigate } from "react-router-dom/dist";
import Footer from "./footer";




const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: 'service' },
    { name: 'About', href: 'about' },
    { name: 'Book Now', href: 'booking' },
    { name: 'E-Gift Card', href: 'giftcard' },
    { name: 'Contact', href: 'contact' },
]

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
            <header className="z-50 bg-salonlight sticky top-0 shadow-salon w-screen">
                <nav className="flex items-center justify-between lg:px-8">
                    <div className="flex lg:flex-1 items-center">
                        <a href="/">
                            <img
                                className="h-16 w-auto"
                                src={logo}
                                alt="logo"
                            />
                        </a>
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
                    {mobileMenuOpen && <div className="flex flex-col absolute right-0 top-16 bg-salonlight lg:hidden">
                        {navigation.map((item) => (
                            <button key={item.name} onClick={() => {
                                navigate(`${item.href}`)
                                setMobileMenuOpen(false)
                                }} className={`uppercase ${item.href.includes(currentUrl) ? 'bg-[#90B9A4] font-bold' : ''} w-48 h-16 hover:border-l-4 hover:border-grey transition ease-in-out duration-500`}>
                                {item.name}
                            </button>
                        ))}
                    </div>}
                </nav>
            </header>
            <div className="w-full overflow-hidden pb-72 sm:pb-48  ">
                <Outlet />

            </div>
            <Footer />


        </div>
    )
};
export default Layout;


const openingHours = [
    {
        day: 'Monday', hours: '9:00-22:00'
    },
    {
        day: 'Tuesday', hours: '09:00-19:00'
    },
    {
        day: 'Wednesday', hours: '09:00-19:00'
    },
    {
        day: 'Thursday', hours: '09:00-19:00'
    },
    {
        day: 'Friday', hours: '09:00-19:00'
    },
    {
        day: 'Saturday', hours: '09:00-19:00'
    },
    {
        day: 'Sunday', hours: '09:00-19:00'
    }
]