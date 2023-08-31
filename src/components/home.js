import CardsCarousel from "./carousels";
import photo from '../assets/home.png'

const Home = () => {
    return <div className="relative px-2 sm:px-4 md:px-8 lg:px-16">

        <div className="mx-auto my-2 sm:my-4 md:my-6 lg:my-10 xl:my-12 ">

            <div className="text-center">
               <img className="rounded-lg  mx-auto" src={photo} />
                {/* <p className=" text-xl leading-8 text-gray-600">
                   Oh La La Nails
                </p> */}
            </div>
        </div>

        <CardsCarousel />
    </div>;
};

export default Home;