function AboutUs() {
    const style = {
        border: "none",
        height: "1px",
        color: "#333",
        backgroundColor: "#333"
    };

    return (
        <div className="hero min-h-max">
            <div className="hero-content flex-col lg:flex-row">
                <img
                    src="https://i.ibb.co/426JcDJ/Cover2-Image.jpg"
                    className="max-w-sm rounded-lg shadow-2xl"
                />
                <div>
                    <p className="text-lg font-semibold">About Company</p>
                    <h1 className="text-xl text-indigo-600 font-bold">Our Featured Exclusives!</h1>
                    <p className="py-6">
                    Searching for your ideal home or commercial property in the Dhaka shouldn't be a daunting experience.
                    That's why we're here to assist you in finding the perfect property at the right price
                    </p>
                    <hr style={style} />
                    <div className="grid grid-cols-1 md:grid-cols-3">
                        <div className="flex flex-col gap-y-1">
                            <h1>Services</h1>
                            <div className="flex">
                                <img src="https://i.ibb.co/bmqRKS3/service.png" width="60" />
                                <h1 className="text-3xl">24/7</h1>
                            </div>
                        </div>

                        <div className="flex flex-col gap-y-3">
                            <h1>Locations</h1>
                            <div className="flex">
                                <img src="https://i.ibb.co/ckft1Ks/location-Image.png" width="40" />
                                <h1 className="text-3xl">Dhaka</h1>
                            </div>
                        </div>

                        <div className="flex flex-col gap-y-3">
                            <h1>Customers</h1>
                            <div className="flex">
                                <img src="https://i.ibb.co/VHC8kc8/customer.png" width="60" />
                                <h1 className="text-3xl">Satisfied</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs;