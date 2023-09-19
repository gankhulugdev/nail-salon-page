import { motion } from "framer-motion"

export default function GiftCard() {
    return <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.75, ease: "easeOut" }}
        id='gift-card' className="px-2 sm:px-4 md:px-8 lg:px-16 flex justify-center ">
        <div id="gift-card-button" className="hover:cursor-pointer">
            <a href="https://www.fresha.com/book-now/lamour-spa-bgtfzb1t/gift-cards?pId=93395" className="pt-2 md:pt-6 lg:pt-8 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Buy Gift Card Here
            </a>
        </div>
    </motion.div>;
}