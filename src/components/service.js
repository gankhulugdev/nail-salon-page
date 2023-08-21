
import { Button, Group, Text, Collapse, Box } from '@mantine/core';
import { useReducer } from 'react';

const features = [
    {
        sysName: 'manicure',
        name: 'Manicure',
        description:
            'Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa.',
    },
    {
        sysName: 'pedicure',
        name: 'Pedicure',
        description:
            'Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget. Sem sodales gravida quam turpis enim lacus amet.',
    },
    {
        sysName: 'combination',
        name: 'Combination',
        description:
            'Quisque est vel vulputate cursus. Risus proin diam nunc commodo. Lobortis auctor congue commodo diam neque.',
    },
    {
        sysName: 'party',
        name: 'Host A Party',
        description:
            'Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget.',
    },
]

const ACTION = {
    MANICURE: 'manicure',
    PEDICURE: 'pedicure',
    COMBINATION: 'combination',
    PARTY: 'party'
}

const reducer = (state, action) => {
    console.log(action.type)
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

    console.log(openedServicesIDs)
    return (
        <div className="py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:text-center">
                    <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Our Services
                    </p>
                </div>
                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
                    <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                        <Box maw={400} mx="auto">

                            {features.map((feature) => (
                                <div key={feature.name} className="relative pl-16">
                                    <dt className="text-base font-semibold leading-7 text-gray-900">
                                        {/* <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-green-500/30">
                                        </div> */}
                                        <Group position="center" mb={5}>
                                            <Button onClick={()=>updateOpenedServices({type: feature.sysName})}>
                                                {feature.name}</Button>
                                        </Group>
                                        <Collapse in={openedServicesIDs[feature.sysName]} transitionDuration={1000} transitionTimingFunction="linear">
                                            <Text>{feature.description}</Text>
                                        </Collapse>

                                    </dt>

                                </div>
                            ))}


                        </Box>
                    </dl>
                </div>
            </div>
        </div>
    )
}