import React from "react";

function HomeBanner() {
    return (
        <div className="hero min-h-screen">
        <div className="hero-content flex-col md:flex-row-reverse">
            <img
                src="https://i.ibb.co/cbqXnqV/Home-Page-Photo.png"
                className="md:w-1/2"
            />
            <div className="md:w-1/2">
                <p>A Deal to Live With</p>
                <h1 className="text-5xl font-semibold"><span className="text-indigo-400">Discover</span> Your Home!</h1>
                <p className="py-6">Find Property for sale in Dhaka with Bangladesh's most trustworthy real estate agency - in Bangladesh. Discover Your Perfect Property in Dhaka with Seven Stones Real Estate - Browse Now! </p>
                <button
                    className="btn btn-subtle
                    bg-indigo-500
                    text-white"
                >Get Started</button>
            </div>
        </div>
        </div>
    );
}

export default HomeBanner;