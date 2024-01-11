import { useNavigate } from "react-router-dom";

function AddProductForm() {
    const navigate = useNavigate();

    function handlePostVehicle(event) {
        event.preventDefault();
        // Capture form values
        const make  = event.target.make.value;
        const model = event.target.model.value;
        const image = event.target.image.value;
        const rent  = event.target.rent.value;
        const description = event.target.description.value;
        // Create a new object with the form values
        const vehicle = {
            make: make,
            model: model,
            image: image,
            rent: rent,
            description: description
        };

        // Now make a post request to the server form storing this object.
        console.log(vehicle);
        
        fetch(`http://localhost:3000/add-a-vehicle`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(vehicle)
        })
        .then((res) => res.json())
        .then((data) => {
            if(data.acknowledged){
                navigate('/manage-product');
            }
        });
    }

  return (
    <div>
        <div className="text-center mt-10">
            <p className="text-indigo-500 font-bold">Add Product</p>
            <h2 className="text-2xl font-bold">Fill up the form to add a new product</h2>
        </div>

        <form onSubmit={handlePostVehicle} className="my-10 flex flex-col gap-y-5">
            <input
                type="text"
                placeholder="City / Adress"
                name="make"
                className="input w-full input-bordered"
            />

            <input
                type="text"
                placeholder="Rooms"
                name="model"
                className="input w-full input-bordered"
            />

            <input
                type="text"
                placeholder="Image Link"
                name="image"
                className="input w-full input-bordered"
            />

            <input
                type="text"
                placeholder="Rent"
                name="rent"
                className="input w-full input-bordered"
            />

            <textarea
                className="textarea textarea-bordered w-full"
                name="description"
                placeholder="Approved?"
            ></textarea>

            <div className="flex justify-center">
                <input type="submit" className="btn btn-primary bg-indigo-600 w-64" />
            </div>
        </form>
    </div>
  );
}
export default AddProductForm;