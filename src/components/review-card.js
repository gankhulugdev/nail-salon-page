

export default function ReviewCard({ name, date, comment }) {

    return <div class="my-8 mx-8 py-8  md:mx-2 w-[250px] min-h-[250px] rounded-lg z-10 bg-white shadow-review">
        <h5 class="mb-2 text-lg font-bold">{name}</h5>
        <p className="mb-4 px-4">
            {comment}
        </p>
        <ul className=" flex justify-center">
            {[...Array(5)].map((_, id) => <li>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" className="w-5  ">
                    <path fill="#e4a11b"
                        d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                </svg>
            </li>
            )}
        </ul>


    </div>
}