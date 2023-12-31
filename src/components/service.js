
import { Accordion, BackgroundImage } from '@mantine/core';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion"
import bgImg from "../assets/service-page.jpg"

export default function Services() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.75, ease: "easeOut" }}

            className="relative isolate">
            <BackgroundImage
                src={bgImg}
                className='min-h-[700px]'
            >
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:text-center">
                        <p className="pt-8 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                            Our Services
                        </p>
                    </div>
                    <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
                        <Accordion multiple radius="lg" chevronPosition="right" transitionDuration={1000}
                            className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16" >
                            {features.map((feature) => (
                                <Accordion.Item key={feature.sysName} value={feature.sysName}>
                                    <Accordion.Control className='bg-salongreen rounded-lg hover:bg-salongreen/95' >
                                        <span className='font-bold text-white'>{feature.name}</span>
                                    </Accordion.Control>
                                    <Accordion.Panel >
                                        <div className={`${feature.name} px-2 py-2 lg:py-4 rounded servicebg`}>
                                            {feature.items?.map((service, idx) => <div key={idx} className='flex justify-between relative py-1 lg:p-2'>
                                                <div className=''>{service.name}</div>
                                                <div className='min-w-fit font-bold text-salongreen'>{service.price}</div>
                                            </div>
                                            )}

                                        </div>
                                    </Accordion.Panel>
                                </Accordion.Item>
                            ))}
                        </Accordion>

                    </div>
                </div>
            </BackgroundImage>

        </motion.div >
    )
}



const features = [
    {
        sysName: 'manicure',
        name: 'Manicure',
        items: [
            {
                name: "Regular Manicure",
                price: '$20.00'
            },
            {
                name: "Dazzle Dry Manicure",
                price: '$25.00'
            },
            {
                name: "No-Chip Manicure",
                price: '$40.00'
            },
            {
                name: "Gel Extension + Nochip",
                price: '$60.00'
            },
            {
                name: "Dipping Powder Manicure",
                price: '$55.00'
            },
            {
                name: "Kids Manicure",
                price: '$13.00'
            },
            {
                name: "Spa Manicure",
                price: '$28.00'
            },
            {
                name: "Nail Polish Change",
                price: '$15.00'
            },
            {
                name: "French Manicure (Basic)",
                price: '$25.00'
            },
            {
                name: "Removal ( Nochip, SoftGel,Dipping Powder)",
                price: '+$10.00'
            },
        ]

    },
    {
        sysName: 'pedicure',
        name: 'Pedicure',
        items: [
            {
                name: "Regular Pedicure",
                price: '$35.00'
            },
            {
                name: "Spa Pedicure",
                price: '$50.00'
            },
            {
                name: "No-Chip Pedicure",
                price: '$50.00'
            },
            {
                name: "Kids Pedicure",
                price: '$25.00'
            },
            {
                name: "Deluxe Pedicure",
                price: '$65.00'
            },
            {
                name: "Deluxe Pedicure + Nochip Pedicure",
                price: '$85.00'
            },
            {
                name: "Spa Pedicure + Nochip",
                price: '$65.00'
            },
            {
                name: "Polish Change for Toenail",
                price: '$20.00'
            },
            {
                name: "Paraffin",
                price: '$10.00'
            },

        ]
    },
    {
        sysName: 'combination',
        name: 'Combo Services',
        items: [
            {
                name: "Regular Manicure & Regular Pedicure",
                price: '$50.00'
            },
            {
                name: "No-Chip Manicure & Regular Pedicure",
                price: '$70.00'
            },
            {
                name: "Dazzle Dry Manicure and Pedicure",
                price: '$70.00'
            },
            {
                name: "No-Chip Manicure + No-Chip Pedicure",
                price: '$85.00'
            },
            {
                name: "Kids Manicure & Pedicure (under 10 y.o",
                price: '$35.00'
            },
            {
                name: "Dip Manicure & Regular Pedicure",
                price: '$95.00'
            },
            {
                name: "Spa Pedicure and No-Chip Manicure",
                price: '$80.00'
            },


        ]
    },
    {
        sysName: 'party',
        name: 'Host A Party',
        items: [
            {
                name: 'Bride Party',
                price: <Link to='/contact'>Contact Us</Link>
            },
            {
                name: 'Birthday Party',
                price: <Link to='/contact'>Contact Us</Link>
            },
        ]

    },
]