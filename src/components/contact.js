import { BackgroundImage, Center, Grid, Text } from "@mantine/core";
import CardsCarousel from "./carousels";
import { motion } from "framer-motion"
import bgImage from "../assets/bg-green.jpg"
import inside1 from "../assets/inside-1.jpg"
import inside2 from "../assets/inside-2.jpg"
import inside3 from "../assets/inside-3.jpg"
import inside4 from "../assets/inside-4.jpg"

const Contact = () => {

    return <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.75, ease: "easeOut" }}

        className="relative isolate">

        <BackgroundImage
            src={bgImage}
            radius="md"
            className="min-h-[700px]"
        >
            <Center p="xs">
                <div className="mx-auto max-w-2xl py-8 sm:py-12 lg:py-14">

                    <div className="text-center">
                        <h1 className="my-8 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                            Open Hours
                        </h1>

                        <div>
                            {openingHours.map((hour) => {
                                return <Grid className="" columns={24}>
                                    <Grid.Col className="font-bold" span={8}>{hour.day}</Grid.Col>
                                    <Grid.Col className="font-bold" span={16}>{hour.hours}</Grid.Col>

                                </Grid>
                            })}
                        </div>
                    </div>
                </div>

            </Center>
            <CardsCarousel data={imageContact} />
        </BackgroundImage>



    </motion.div>;


};


const openingHours = [
    {
        day: 'Monday', hours: '9:00 AM - 7:00 PM'
    },
    {
        day: 'Tuesday', hours: '9:00 AM - 7:00 PM'
    },
    {
        day: 'Wednesday', hours: '9:00 AM - 7:00 PM'
    },
    {
        day: 'Thursday', hours: '9:00 AM - 7:00 PM'
    },
    {
        day: 'Friday', hours: '9:00 AM - 7:00 PM'
    },
    {
        day: 'Saturday', hours: '9:00 AM - 6:00 PM'
    },
    {
        day: 'Sunday', hours: '10:00 AM - 6:00 PM'
    }
]

const imageContact = [
    {
        image: inside1,
        title: '',
        category: '',
    },
    {
        image: inside2,
        title: '',
        category: '',
    },
    {
        image: inside3,
        title: '',
        category: '',
    },
    {
        image: inside4,
        title: '',
        category: '',
    },
]

export default Contact;