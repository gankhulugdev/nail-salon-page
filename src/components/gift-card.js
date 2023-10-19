import { motion } from "framer-motion"

export default function GiftCard() {
    return <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.75, ease: "easeOut" }}
        id='gift-card' className="flex justify-center ">
        <div id="gift-card-button">
            <a href="https://www.fresha.com/book-now/lamour-spa-bgtfzb1t/gift-cards?pId=93395" className=" bg-white/60 rounded-2xl px-6 text-2xl font-bold tracking-tight text-black-900 sm:text-4xl">
                Buy Gift Card Here
            </a>
        </div>
    </motion.div>;
}