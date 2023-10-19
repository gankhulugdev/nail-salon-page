import { motion } from "framer-motion"


export default function Booking() {


    return <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.75, ease: "easeOut" }}
        id='book' className="flex justify-center  ">


        <div id="book-button">
            <a href="https://www.fresha.com/book-now/lamour-spa-bgtfzb1t/services?lid=100600&pId=93395" className="border bg-salongreen/40 rounded-2xl px-6 text-2xl font-bold tracking-tight text-black-900 sm:text-4xl">
                Book Now
            </a>
        </div>


    </motion.div>;
}