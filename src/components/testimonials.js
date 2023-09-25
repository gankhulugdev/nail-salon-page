import ReviewCard from "./review-card"


export default function Testimonials() {


    return <div class="container my-24 mx-auto md:px-6">
    <section class="mb-32 text-center">
      <h2 class="mb-12 text-3xl font-bold">Testimonials</h2>
  
      <div class="grid gap-x-6 md:grid-cols-3 lg:gap-x-12">
       
       {freshaReview.map((review)=> <ReviewCard name={review.name} date={review.date} stars={review.stars} comment={review.comment} />)}
       
      </div>
    </section>
  </div>
    
    
    
    // <div className="flex flex-wrap gap-y-10 justify-between">
    //     {freshaReview.map((review) => <ReviewCard name={review.name} date={review.date} stars={review.stars} comment={review.comment} />

    //     )}


    // </div>
}

const freshaReview = [
    {
        name: "Linda C",
        date: "27 Aug 2023",
        stars: '5',
        comment: 'Very nice salon. Clean. No frills but a great Dazzle mani!'
    },
    {
        name: 'Marianne H',
        date: ' 13 Sep 2023',
        stars: '5',
        comment: ' Great as always!'
    },
    {
        name: 'Carina G',
        date: '9 Sep 2023',
        stars: '5',
        comment: 'thank you!'
    },
    {
        name: 'Cindy M',
        date: '3 Aug 2023',
        stars: '5',
        comment: 'I love the atmosphere and the service was amazing!'
    },
    {
        name: 'Leslie R',
        date: '2 Aug 2023',
        stars: '5',
        comment: 'Emma was fantastic, thank you!'
    },
    {
        name: 'James',
        date: '28 Jul 2023',
        stars: '5',
        comment: 'Polly was absolutely amazing. Ended up getting a mini cure and pedicure. Feet and hands look great and fell great!'
    },
    {
        name: 'Paula',
        date: '21 Jul 2023',
        stars: '5',
        comment: 'All the girls do an amazing job'
    },
    {
        name: 'Beth P',
        date: '1 Jul 2023',
        stars: '5',
        comment: 'This was my fourth visit to Lamour, I have been very happy with my mani/pedi every time. I tried dazzle dry today, I am a big fan.'

    },
    {
        name: 'Claudia C',
        date: '7 Jun 2023',
        stars: '5',
        comment: 'I am always happy with my no-chip manicure and pedicure, great selection of nail polish colors, and excellent customer service.'
    },
    {
        name: 'Linda R',
        date: '25 May 2023',
        stars: '5',
        comment: 'Excellent, Friendly, Caring service. I highly recommend. Dahlia gave me a wonderful Mani/Pedi and really helped me navigate the step up/down to the pedi chair. I will definitely be back.'
    }
]