import {Link} from "react-router-dom"
import {IoLocationSharp} from "react-icons/io5"
import {FiPhoneCall} from "react-icons/fi"
import {MdAddHomeWork} from "react-icons/md"
import {MdOutlineManageAccounts} from "react-icons/md"
import {MdRateReview} from "react-icons/md"
import {BsFacebook} from "react-icons/bs"
import {AiFillTwitterCircle} from "react-icons/ai"
import {IoLogoYoutube} from "react-icons/io"
import {BsGithub} from "react-icons/bs"

function Footer() {
    return (
        <div className="bg-indigo-600">
            <footer className="max-w-6xl mx-auto footer p-10 text-white">
                <div className="h-full flex items-center">
                    <div className="flex items-center gap-1">
                        {/* icon here */}
                        <IoLocationSharp size={25}></IoLocationSharp>
                        <p>House 11, Road 62, Gulshan 2, Dhaka, Bangladesh</p>
                    </div>
                </div> 
                <div>
                    <span className="footer-title">Quick Links</span> 
                    <Link to={`/contact-us`}>
                        <span className="flex items-center gap-1">
                            <FiPhoneCall size={15}></FiPhoneCall>
                            Contact
                        </span>
                    </Link>

                    <Link to={`/manage-product`}>
                        <span className="flex items-center gap-1">
                            <MdOutlineManageAccounts size={15}></MdOutlineManageAccounts>
                            Manage Property
                        </span>
                    </Link>

                    <Link to={`/add-product`}>
                        <span className="flex items-center gap-1">
                            <MdAddHomeWork size={15}></MdAddHomeWork>
                            Add Property
                        </span>
                    </Link>

                    <Link to={`/add-review`}>
                        <span className="flex items-center gap-1">
                            <MdRateReview size={15}></MdRateReview>
                            Add Review
                        </span>
                    </Link>
                </div> 
                <div>
                    <span className="footer-title">Socials</span> 
                        <span className="flex items-center gap-1">
                            <BsFacebook size={25}></BsFacebook>
                            <a href="https://www.facebook.com/abdullah.johar.9822/" target="_blank">Facebook</a>
                        </span>
                    
                        <span className="flex items-center gap-1">
                            <AiFillTwitterCircle size={28}></AiFillTwitterCircle>
                            <a href="https://twitter.com/abdullahjohar33" target="_blank">Twitter</a>
                        </span>

                        <span className="flex items-center gap-1">
                            <IoLogoYoutube size={25}></IoLogoYoutube>
                            <a href="https://www.youtube.com/@jamilas-ad2597" target="_blank">YouTube</a>
                        </span>

                        <span className="flex items-center gap-1">
                            <BsGithub size={25}></BsGithub>
                            <a href="https://github.com/abdullahjohar23" target="_blank">GitHub</a>
                        </span>
                </div>
            </footer>
        </div>
    )
}

export default Footer;