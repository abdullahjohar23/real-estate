import { Link, useLoaderData } from "react-router-dom";

function OurApartments() {
    // get all the aparments using userLoaderData() hook of react-router-dom
    const vehicles = useLoaderData();

    return (
        <div className="my-10">
            {/* our apartment headings */}
            <div className="text-center mb-8">
                <p className="font-bold">Apartment</p>
                <h1 className="text-3xl font-bold">Our
                    <span className="text-tealgreen-500"> Apartments</span>
                </h1>
            </div>
            {/* cards of all available aparments */}
            {/* map the fetch array */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {
                    vehicles?.map(vehicle => (
                        <div key={vehicle._id} className="card card-compact bg-base-100 shadow-xl">
                        <figure>
                            <img
                                src={vehicle?.image}
                                alt={vehicle?.make + " " + vehicle?.model}
                            />
                        </figure>
                            <div className="card-body">
                                <h2 className="card-title">{vehicle?.make + " " + vehicle?.model}</h2>
                                <p>{vehicle?.description}</p>
                                <div className="card-actions justify-end">
                                    <Link to={`/vehicle/${vehicle?._id}`}>
                                        <button className="btn btn-primary bg-indigo-500">{vehicle?.rent}</button>
                                    </Link>
                                </div>
                            </div>
                    </div>                    
                ))}
            </div>
        </div>
    )
}

export default OurApartments;