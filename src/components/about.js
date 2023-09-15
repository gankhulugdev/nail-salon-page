
import CardsCarousel from './carousels';

export default function About() {
    const freshaReview = [
        {
            name: "Linda C",
            date:"27 Aug 2023",
            stars:'5',
            comment:'Very nice salon. Clean. No frills but a great Dazzle mani!'
        },
        {
            name:'Marianne H',
            date:' 13 Sep 2023',
            stars:'5',
            comment:' Great as always!'
        },
        {
            name:'Carina G',
            date:'9 Sep 2023',
            stars:'5',
            comment:'thank you!'
        },
        {
            name:'Cindy M',
            date:'3 Aug 2023',
            stars:'5',
            comment:'I love the atmosphere and the service was amazing!'
        },
        {
            name:'Leslie R',
            date:'2 Aug 2023',
            stars:'5',
            comment:'Emma was fantastic, thank you!'
        },
        {
            name:'James',
            date:'28 Jul 2023',
            stars:'5',
            comment:'Polly was absolutely amazing. Ended up getting a mini cure and pedicure. Feet and hands look great and fell great!'
        },
        {
            name:'Paula',
            date:'21 Jul 2023',
            stars:'5',
            comment:'All the girls do an amazing job'
        },
        {
            name:'Beth P',
            date:'1 Jul 2023',
            stars:'5',
            comment:'This was my fourth visit to Lamour, I have been very happy with my mani/pedi every time. I tried dazzle dry today, I am a big fan.'
            
        },
        {
            name:'Claudia C',
            date:'7 Jun 2023',
            stars:'5',
            comment:'I am always happy with my no-chip manicure and pedicure, great selection of nail polish colors, and excellent customer service.'
        },
        {
            name:'Linda R',
            date:'25 May 2023',
            stars:'5',
            comment:'Excellent, Friendly, Caring service. I highly recommend. Dahlia gave me a wonderful Mani/Pedi and really helped me navigate the step up/down to the pedi chair. I will definitely be back.'
        },
        {
            name:'',
            date:'',
            stars:'',
            comment:''
        }
    ]
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