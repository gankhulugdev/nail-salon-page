
import { Accordion } from '@mantine/core';
import { Link, useLocation } from 'react-router-dom';

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

export default function Services() {
    const {state} = useLocation();
    console.log(state)
    return (
        <div className="py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:text-center">
                    <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Our Services
                    </p>
                </div>
                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
                    <Accordion defaultValue={state? state: null} className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16" multiple radius="lg" chevronPosition="right" transitionDuration={1000} >
                        {features.map((feature) => (
                            <Accordion.Item key={feature.sysName} value={feature.sysName}>
                                <Accordion.Control className='bg-green-500/30 rounded-lg' >
                                    <span className='font-bold text-green-700'>{feature.name}</span>
                                </Accordion.Control>
                                <Accordion.Panel >
                                    <div className={`${feature.name} px-2 rounded servicebg`}>
                                    {feature.items?.map((service, idx) => <div key={idx} className='flex justify-between relative'>
                                        <div>{service.name}</div>
                                        <div className='min-w-fit'>{service.price}</div>
                                    </div>
                                    )}
                                        
                                    </div>
                                    </Accordion.Panel>
                            </Accordion.Item>

                            // {/* <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-green-500/30">
                            //     </div> */}
                            // {/* <Button color="teal" onClick={() => updateOpenedServices({ type: feature.sysName })}>
                            //     {feature.name}</Button>
                            // <Collapse in={openedServicesIDs[feature.sysName]} transitionDuration={500} transitionTimingFunction="linear">
                            //     <Text>{feature.description}</Text>
                            // </Collapse> */}


                        ))}
                    </Accordion>

                </div>
            </div>
        </div >
    )
}