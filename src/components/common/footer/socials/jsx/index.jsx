// IMPORT REACT ICONS
import { FaTwitter, FaLinkedin, FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa"

// IMPORT JSX ATOMS
import LinkNewWindow from "@/atoms/links/new-window/jsx"

const socialData = [

    { icon: <FaTwitter />, label: "Twitter", link: "/" },
    { icon: <FaLinkedin />, label: "LinkedIn", link: "/" },
    { icon: <FaInstagram />, label: "Instagram", link: "/" },
    { icon: <FaFacebook />, label: "Facebook", link: "/" },
    { icon: <FaYoutube />, label: "YouTube", link: "/" },

]
const SocialIcons = () => {

    return (

        <div className="flex gap-2">
            {

                socialData.map( ( { icon, link } ) => (

                    <LinkNewWindow href={ link }>
                        <div className="flex items-center justify-center p-2 text-lg text-blue-500 bg-white rounded-full hover:text-white hover:bg-orange-500 transition-colors duration-300">
                            { icon }
                        </div>
                    </LinkNewWindow> 

                ))

            }
        </div>

    )
    
}
export default SocialIcons
