import { AnimatePresence, motion } from "framer-motion"
import Testimonials from './testimonials';
import { BackgroundImage } from "@mantine/core";
import bgImg from "../assets/polish.png"

export default function About() {
    return <AnimatePresence mode="wait" initial={false}>
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.75, ease: "easeOut" }}
            className="relative isolate">
             <BackgroundImage
                src={bgImg}
                className='min-h-[800px]'
            >
                <div className="mx-auto text-center">
                    <p className="pt-8 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        About Us
                    </p>
                </div>
                <div className=" mx-auto text-lg md:text-2xl  sm:mt-8 lg:mt-12 lg:my-16 px-6 lg:px-8">
                    <p>L'Amour Nail Spa is located in Park Ridge, Illinois. We provide nail services in a clean and comfortable environment. We strive to deliver the quality of services and excellent customer service. All pedicure tubs are protected with liners. Liners are use only once and are disposed after each client. Also, we use disposal files, buffers, and pumice pads.</p>
                </div>

                <Testimonials />
            </BackgroundImage>

        </motion.div>;
    </AnimatePresence>
}
