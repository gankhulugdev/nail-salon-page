import { Outlet, Link } from "react-router-dom";
import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { FaBars } from "react-icons/fa"
import { AiOutlineClose } from "react-icons/ai"



const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: 'service' },
    { name: 'About', href: 'about' },
    { name: 'Book Now', href: 'booking' },
    { name: 'Contact', href: 'contact' },
    { name: 'Career', href: 'career' },
    { name: 'Gift Card', href: 'giftcard' },

]

const Layout = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    return (
        <div className="bg-white">
            <header className="absolute inset-x-0 top-0 z-50 sticky top-0">
                <nav className="flex items-center bg-gray-100 justify-between p-6 lg:px-8" aria-label="Global">
                    <div className="flex lg:flex-1">
                        <a href="/" className="-m-1.5 p-1.5">
                            <span className="sr-only">Your Company</span>
                            <img
                                className="h-8 w-auto"
                                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                                alt=""
                            />
                        </a>
                    </div>
                    <div className="flex lg:hidden">
                        <button
                            type="button"
                            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                            onClick={() => setMobileMenuOpen(true)}
                        >
                            <FaBars className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="hidden lg:flex lg:gap-x-12">
                        {navigation.map((item) => (
                            <Link key={item.name} to={item.href} className="text-sm font-semibold leading-6 text-green-900">
                                {item.name}
                            </Link>
                        ))}
                    </div>
                </nav>
                <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                    <div className="fixed inset-0 z-50" />
                    <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-100 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                        <div className="flex items-center justify-between">
                            <Link to="/" className="-m-1.5 p-1.5">
                                <span className="sr-only">Your Company</span>
                                <img
                                    className="h-8 w-auto"
                                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                                    alt=""
                                />
                            </Link>
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
                            <div className="-my-6 divide-y divide-gray-500/10">
                                <div className="space-y-2 py-6">
                                    {navigation.map((item) => (
                                        <Link
                                            key={item.name}
                                            to={item.href}
                                            className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
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
            <div className="relative isolate overflow-hidden bg-green-500 py-24 sm:py-32">
                <img
                    src="https://images.unsplash.com/photo-1599206676335-193c82b13c9e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1907&q=80"
                    alt=""
                    className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center opacity-20"
                />
                <div
                    className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
                    aria-hidden="true"
                >
                    <div
                        className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
                        style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                    />
                </div>
                <div
                    className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
                    aria-hidden="true"
                >
                    <div
                        className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
                        style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                    />
                </div> <Outlet /></div>

        </div>
    )
};

// import { useState } from 'react'
// import { Dialog } from '@headlessui/react'
// import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'


// export default function Example() {
//     const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

//     return (
//         <div className="bg-white">
//             <header className="absolute inset-x-0 top-0 z-50">
//                 <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
//                     <div className="flex lg:flex-1">
//                         <a href="#" className="-m-1.5 p-1.5">
//                             <span className="sr-only">Your Company</span>
//                             <img
//                                 className="h-8 w-auto"
//                                 src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
//                                 alt=""
//                             />
//                         </a>
//                     </div>
//                     <div className="flex lg:hidden">
//                         <button
//                             type="button"
//                             className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
//                             onClick={() => setMobileMenuOpen(true)}
//                         >
//                             <span className="sr-only">Open main menu</span>
//                             <Bars3Icon className="h-6 w-6" aria-hidden="true" />
//                         </button>
//                     </div>
//                     <div className="hidden lg:flex lg:gap-x-12">
//                         {navigation.map((item) => (
//                             <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-gray-900">
//                                 {item.name}
//                             </a>
//                         ))}
//                     </div>
//                     <div className="hidden lg:flex lg:flex-1 lg:justify-end">
//                         <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
//                             Log in <span aria-hidden="true">&rarr;</span>
//                         </a>
//                     </div>
//                 </nav>
//                 <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
//                     <div className="fixed inset-0 z-50" />
//                     <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
//                         <div className="flex items-center justify-between">
//                             <a href="#" className="-m-1.5 p-1.5">
//                                 <span className="sr-only">Your Company</span>
//                                 <img
//                                     className="h-8 w-auto"
//                                     src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
//                                     alt=""
//                                 />
//                             </a>
//                             <button
//                                 type="button"
//                                 className="-m-2.5 rounded-md p-2.5 text-gray-700"
//                                 onClick={() => setMobileMenuOpen(false)}
//                             >
//                                 <span className="sr-only">Close menu</span>
//                                 <XMarkIcon className="h-6 w-6" aria-hidden="true" />
//                             </button>
//                         </div>
//                         <div className="mt-6 flow-root">
//                             <div className="-my-6 divide-y divide-gray-500/10">
//                                 <div className="space-y-2 py-6">
//                                     {navigation.map((item) => (
//                                         <a
//                                             key={item.name}
//                                             href={item.href}
//                                             className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
//                                         >
//                                             {item.name}
//                                         </a>
//                                     ))}
//                                 </div>
//                                 <div className="py-6">
//                                     <a
//                                         href="#"
//                                         className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
//                                     >
//                                         Log in
//                                     </a>
//                                 </div>
//                             </div>
//                         </div>
//                     </Dialog.Panel>
//                 </Dialog>
//             </header>

//             <div className="relative isolate px-6 pt-14 lg:px-8">
//                 <div
//                     className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
//                     aria-hidden="true"
//                 >
//                     <div
//                         className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
//                         style={{
//                             clipPath:
//                                 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
//                         }}
//                     />
//                 </div>
//                 <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
//                     <div className="hidden sm:mb-8 sm:flex sm:justify-center">
//                         <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
//                             Announcing our next round of funding.{' '}
//                             <a href="#" className="font-semibold text-indigo-600">
//                                 <span className="absolute inset-0" aria-hidden="true" />
//                                 Read more <span aria-hidden="true">&rarr;</span>
//                             </a>
//                         </div>
//                     </div>
//                     <div className="text-center">
//                         <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
//                             Data to enrich your online business
//                         </h1>
//                         <p className="mt-6 text-lg leading-8 text-gray-600">
//                             Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
//                             fugiat veniam occaecat fugiat aliqua.
//                         </p>
//                         <div className="mt-10 flex items-center justify-center gap-x-6">
//                             <a
//                                 href="#"
//                                 className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
//                             >
//                                 Get started
//                             </a>
//                             <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
//                                 Learn more <span aria-hidden="true">→</span>
//                             </a>
//                         </div>
//                     </div>
//                 </div>
//                 <div
//                     className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
//                     aria-hidden="true"
//                 >
//                     <div
//                         className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
//                         style={{
//                             clipPath:
//                                 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
//                         }}
//                     />
//                 </div>
//             </div>
//         </div>
//     )
// }


export default Layout;