import { Outlet, Link } from "react-router-dom";
import { useEffect, useState } from 'react'
import { Dialog } from '@headlessui/react'
import { FaBars } from "react-icons/fa"
import { AiOutlineClose } from "react-icons/ai"
import logo from '../assets/logo.png'
import { useLocation, useNavigate } from "react-router-dom/dist";




const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: 'service' },
    { name: 'About', href: 'about' },
    { name: 'Book Now', href: 'booking' },
    { name: 'E-Gift Card', href: 'giftcard' },
    { name: 'Contact', href: 'contact' },
    // { name: 'Career', href: 'career' },


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
            <header className="z-50 bg-salonlight sticky top-0 shadow-salon">
                <nav className="flex items-center justify-between lg:px-8">
                    <div className="flex lg:flex-1 items-center">
                        <a href="/">
                            {/* <span className="sr-only">Your Company</span> */}
                            <img
                                className="h-16 w-auto"
                                src={logo}
                                alt="logo"
                            />
                        </a>
                        <span className="pl-2  leading-6 text-primary"> L'amour Nail Spa</span>
                    </div>
                    <div className="flex lg:hidden">
                        <button
                            type="button"
                            className="m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                            onClick={() => setMobileMenuOpen(true)}
                        >
                            <FaBars className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="hidden lg:flex ">
                        {navigation.map((item) => (
                            <button key={item.name} onClick={() => navigate(`${item.href}`)} className={`${item.href.includes(currentUrl) ? 'bg-[#90B9A4] font-bold' : ''} w-24 h-16 hover:underline`}>
                                {item.name}
                            </button>
                        ))}
                    </div>
                </nav>
                <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                    <div className="fixed inset-0 z-50" />
                    <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-48 overflow-y-auto bg-salonlight px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                        <div className="flex items-center justify-end">
                            <button
                                type="button"
                                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                <span className="sr-only">Close menu</span>
                                <AiOutlineClose className="h-6 w-6" aria-hidden="true" />
                            </button>
                        </div>
                        <div className="mt-6 flow-root">
                            <div className="my-6">
                                <div className="space-y-2 py-6 duration-500 ease-linear">
                                    {navigation.map((item) => (
                                        <Link
                                            key={item.name}
                                            to={item.href}
                                            onClick={() => setMobileMenuOpen(false)}
                                            className={`${item.href.includes(currentUrl) ? 'text-white bg-[#90B9A4]' : 'text-[#90B9A4]'} -mx-3 block rounded-lg px-3 py-2 font-semibold leading-7 text-black-900 hover:hover:underline`}
                                        >
                                            {item.name}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </Dialog.Panel>
                </Dialog>
            </header>
            <div className="w-full overflow-hidden pb-72 sm:pb-48  ">
                {/* <img
                    src="https://images.unsplash.com/photo-1599206676335-193c82b13c9e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1907&q=80"
                    alt=""
                    className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center opacity-10"
                /> */}
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

const Footer = () => {

    return <div className="z-50 bg-salonlight flex items-center justify-center w-screen opacity-80 fixed bottom-0 shadow-salon">
        <div className="flex items-center justify-between lg:px-8 ">
            <div className="flex flex-wrap  items-center mx-8">
                <div className="p-4 lg:px-8">
                    <span className="font-bold">Address:</span>
                    <span className="pl-2">1101 W Touhy Ave, Park Ridge, IL 60068</span>


                </div>

                <div className="p-4 lg:px-8">
                    <span className="font-bold">Phone:</span>
                    <span className="pl-2" >(224)-585-6125</span>
                </div>

                <div className="p-4 lg:px-8">
                    <span className="font-bold">Email:</span>
                    <span className="pl-2">jessicana2424@gmail.com</span>


                </div>

                <div className="p-4 lg:px-8 flex justify-between items-center">
                    <span className="font-bold">Follow Us:</span>
                    <img className="h-[30px] px-2" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAABUElEQVR4nO2ZzUrDQBDH82S7Vby1JTsoPpAieFBv0qMP4UyEQq03L4KWWh/Am4eASXupYEeiWL9o6W5jdgPzgzku+f/2m00UCYIgBE3DYKwArxTgRANxFaUAJwqor+KkvVZ4beiwqtB6URk8cO557+HhU4Ja1gLFtAlI4NJewODYe3CYV24tEEBo/l4ioEvoxc2dhI86Q767TznLpzyb8Q+CHoGN7YSvb554GTpkgePOcGn44AUGo5RrLZCPX/4E3ju55a3di5Xaexd4/b1imd/XxartvQvYThktAvA/vb6I52wa3gjYMBil9RY47z7WW+D07CE8AdmFQEaAZAppOYlJdiGWbRTkNspyEuu6XSVUyU+L6wlgZi8A1C/7QudcBnv2AnHS9h4cPqoB2IxcKH4u+A6vgPadwn9JUKt4n6/yuV0V3zLYc+55QRCEqCreAAESa+zxbT1rAAAAAElFTkSuQmCC"></img>
                    <img className="h-[30px] px-2" src="data:image/png;base64,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" alt="instagram" />


                </div>


            </div>


        </div>


    </div>
}