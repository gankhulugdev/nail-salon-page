import CardsCarousel from "./carousels";
import photo from '../assets/home.png'

const Home = () => {
    return <div className="px-2 sm:px-4 md:px-8 lg:px-16">

        <div className="mx-auto">


            <img className="rounded-lg  mx-auto" src={photo} />
            {/* <p className=" text-xl leading-8 text-gray-600">
                   Oh La La Nails
                </p> */}

            <CardsCarousel />
        </div>


    </div>;
};

export default Home;