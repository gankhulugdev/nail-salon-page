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
        className="relative isolate px-6 lg:px-8">

        <BackgroundImage
            src={bgImage}
            radius="md"
        >
            <Center p="md">
                <div className="mx-auto max-w-2xl py-8 sm:py-12 lg:py-14">

                    <div className="text-center">
                        <h1 className="my-8 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                            Open Hours
                        </h1>

                        <div className="mx-auto ">
                            {openingHours.map((hour) => {
                                return <Grid className="" columns={24}>
                                    <Grid.Col className="font-bold" span={12}>{hour.day}</Grid.Col>
                                    <Grid.Col className="font-bold" span={12}>{hour.hours}</Grid.Col>

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
        day: 'Monday', hours: '9:00 - 22:00'
    },
    {
        day: 'Tuesday', hours: '09:00 - 19:00'
    },
    {
        day: 'Wednesday', hours: '09:00 - 19:00'
    },
    {
        day: 'Thursday', hours: '09:00 - 19:00'
    },
    {
        day: 'Friday', hours: '09:00 - 19:00'
    },
    {
        day: 'Saturday', hours: '09:00 - 19:00'
    },
    {
        day: 'Sunday', hours: '09:00 - 19:00'
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