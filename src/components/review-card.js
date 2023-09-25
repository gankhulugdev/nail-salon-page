

export default function ReviewCard({ name, date, comment }) {

    return <div class="my-8 mx-8 py-8 border md:mx-2 rounded-md z-10 bg-white">
        <h5 class="mb-2 text-lg font-bold">{name}</h5>

        <p className="mb-4 px-4">
            {comment}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" className="inline-block w-6">
                <path fill="currentColor"
                    d="M580 556h160V396H580v160Zm-360 0h160V396H220v160Zm406 220 80-160H520V336h280v288l-76 152h-98Zm-360 0 80-160H160V336h280v288l-76 152h-98Zm34-300Zm360 0Z" />
            </svg>
        </p>
        <div className="relative bottom-0">
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

    </div>
}