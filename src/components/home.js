import CardsCarousel from "./carousels";
import photo from '../assets/home.png'
import { motion } from 'framer-motion'
import gelEx from '../assets/gel-extend.jpg'
import chromNail from '../assets/chrome.jpg'
import Chrome2 from '../assets/Chrome2.png'
import dipManicure from '../assets/dipManicure.jpg'
import softGel from '../assets/softGel.jpg'
import dazzleDry from '../assets/dazzleDry.png'
import noChip from '../assets/noChip.jpg'
import { BackgroundImage } from "@mantine/core";

const Home = () => {
  return <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.75, ease: "easeOut" }}

    className="relative isolate px-6 lg:px-8">

      <img className="rounded-lg mx-auto" alt="welcome" src={photo} />

    {/* <BackgroundImage
      src={photo}
      radius="md"
      className='min-h-[700px]'
    >
    </BackgroundImage> */}

    <CardsCarousel data={data} />

  </motion.div>
};

export default Home;

const data = [
  {
    image:
      'https://images.unsplash.com/photo-1632345031435-8727f6897d53?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    title: 'No chip lasts longer',
    category: 'manicure',
  },
  {
    image: gelEx,
    title: 'Soft Gel Extension',
    category: 'manicure',
  },
  {
    image: chromNail,
    title: 'Chrome',
    category: 'manicure',
  },
  {
    image: dipManicure,
    title: 'Dipping Powder',
    category: 'manicure',
  },
  {
    image: Chrome2,
    title: 'Chrome',
    category: 'manicure',
  },
  {
    image: dazzleDry,
    title: 'Dazzle Dry Manicure',
    category: 'Nail Polish',
  },
  {
    image: softGel,
    title: 'SoftGel Extension',
    category: 'Manicure',
  },
  {
    image: noChip,
    title: 'No chip',
    category: 'manicure',
  },
];