

export default function ReviewCard({ name, comment }) {

    return <div className="absolute top-[120px] left-[50%] -translate-y-1/2 -translate-x-1/2 my-8  py-8  w-[250px] min-h-[350px] rounded-lg z-1 bg-white shadow-review">
        <h5 className="mb-2 text-lg font-bold">{name}</h5>
        <p className="mb-4 px-4">
            {comment}
        </p>
        <ul className=" flex justify-center">
            {[...Array(5)].map((_, id) => <li key={id}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" className="w-5  ">
                    <path fill="#e4a11b"
                        d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                </svg>
            </li>
            )}
        </ul>


    </div>
}