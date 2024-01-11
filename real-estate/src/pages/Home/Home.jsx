import Footer from "../../components/Shared/Footer";
import Navbar from "../../components/Shared/Navbar";
import HomeBanner from "./HomeBanner";
import AboutUs from "./AboutUs";
import ContactForm from "../ContactUs/ContactForm";
import OurApartments from "./OurApartments";

function Home() {
    return (
        <div>
            <div className="max-w-6xl mx-auto">
                    <Navbar></Navbar>
                    <HomeBanner></HomeBanner>
                <OurApartments></OurApartments>
                <AboutUs></AboutUs>
                <ContactForm></ContactForm>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default Home;