
import CardsCarousel from './carousels';

export default function About() {
    return <div id='about' className="px-2 sm:px-4 md:px-8 lg:px-16">

        <div className="mx-auto ">

            <div className="mx-auto text-center">
                <p className="pt-2 md:pt-6 lg:pt-8 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    About Us
                </p>
            </div>
            <div className="mx-auto mt-2 my-12 text-2xl mt-6 sm:mt-8 lg:mt-12 lg:my-16">
                <p>L'Amour Nail Spa is located in Park Ridge, Illinois. We provide nail services in a clean and comfortable environment. We strive to deliver the quality of services and excellent customer service. All pedicure tubs are protected with liners. Liners are use only once and are disposed after each client. Also, we use disposal files, buffers, and pumice pads.</p>
            </div>

            <CardsCarousel />
        </div>

    </div>;
}