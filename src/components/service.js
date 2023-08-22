
import { Button, Text, Collapse, Accordion } from '@mantine/core';
import { useReducer } from 'react';
import { Link } from 'react-router-dom';

const features = [
    {
        sysName: 'manicure',
        name: 'Manicure',
        items: [
            {
                name: "Regular Manicure",
                price: '20$'
            },
            {
                name: "Dazzle Dry",
                price: '25$'
            },
            {
                name: "No-Chip Manicure",
                price: '40$'
            },
            {
                name: "Gel Extension",
                price: '60$'
            },
            {
                name: "Dipping Powder",
                price: '55$'
            },

        ]

    },
    {
        sysName: 'pedicure',
        name: 'Pedicure',
        items: [
            {
                name: "Regular Pedicure",
                price: '35$'
            },
            {
                name: "Express Pedicure",
                price: '25$'
            },
            {
                name: "No-Chip Pedicure",
                price: '50$'
            },
            {
                name: "Deluxe Pedicure",
                price: '45$'
            },
            {
                name: "Spa Pedicure",
                price: '60$'
            },


        ]
    },
    {
        sysName: 'combination',
        name: 'Combination',
        items: [
            {
                name: "Regular Manicure & Regular Pedicure",
                price: '55$'
            },
            {
                name: "No-Chip Manicure & Regular Pedicure",
                price: '70$'
            },
            {
                name: "Regular Manicure and No Chip Pedicure",
                price: '70$'
            },
            {
                name: "Dip Manicure & Regular Pedicure",
                price: '90$'
            },
            {
                name: "Spa Pedicure and Regular Manicure",
                price: '80$'
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

const ACTION = {
    MANICURE: 'manicure',
    PEDICURE: 'pedicure',
    COMBINATION: 'combination',
    PARTY: 'party'
}

const reducer = (state, action) => {
    switch (action.type) {
        case ACTION.MANICURE:
            return state.manicure ? { ...state, manicure: false } : { ...state, manicure: true };
        case ACTION.PEDICURE:
            return state.pedicure ? { ...state, pedicure: false } : { ...state, pedicure: true };
        case ACTION.COMBINATION:
            return state.combination ? { ...state, combination: false } : { ...state, combination: true };
        case ACTION.PARTY:
            return state.party ? { ...state, party: false } : { ...state, party: true };
        default:
            return state;
    }
};

export default function Services() {
    // const [opened, { toggle }] = useDisclosure(false);
    const [openedServicesIDs, updateOpenedServices] = useReducer(reducer, { manicure: false, pedicure: false, combination: false, party: false })
    return (
        <div className="py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:text-center">
                    <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Our Services
                    </p>
                </div>
                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
                    <Accordion className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16" multiple radius="lg" chevronPosition="right" transitionDuration={1000} >
                        {features.map((feature) => (
                            <Accordion.Item key={feature.sysName} value={feature.sysName}>
                                <Accordion.Control className='bg-green-500/30 rounded-lg' ><span className='font-bold text-green-700'>{feature.name}</span></Accordion.Control>
                                <Accordion.Panel>
                                    {feature.items?.map((service, idx) => {
                                        return <div key={idx} className='flex justify-between'>
                                            <Text>{service.name}</Text>
                                            <Text>{service.price}</Text>
                                        </div>
                                    })}</Accordion.Panel>
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