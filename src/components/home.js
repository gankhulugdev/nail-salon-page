import CardsCarousel from "./carousels";
import photo from '../assets/home.png'
import { motion } from 'framer-motion'

const Home = () => {
    return <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.75, ease: "easeOut" }}>
        <div className="px-2 sm:px-4 md:px-8 lg:px-16">

            <div className="mx-auto">


                <img className="rounded-lg  mx-auto" src={photo} />
                {/* <p className=" text-xl leading-8 text-gray-600">
           Oh La La Nails
        </p> */}

                <CardsCarousel />
            </div>


        </div>;

    </motion.div>
};

export default Home;