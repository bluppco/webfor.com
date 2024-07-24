// IMPORT REACT ICONS
import { FaTwitter, FaLinkedin, FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa"

// IMPORT JSX ATOMS
import LinkNewWindow from "@/atoms/links/new-window/jsx"

const socialData = [

    { 
        icon: FaTwitter,
        label: "Twitter", 
        link: "/" 
    },
    { 
        icon: FaLinkedin, 
        label: "LinkedIn", 
        link: "/" 
    },
    { 
        icon: FaInstagram, 
        label: "Instagram", 
        link: "/" 
    },
    { 
        icon: FaFacebook, 
        label: "Facebook", 
        link: "/" 
    },
    { 
        icon: FaYoutube, 
        label: "YouTube", 
        link: "/" 
    },

]
const SocialIcons = () => {

    return (

        <div className="flex gap-2">
            {

                socialData.map( ( { icon: Icon, link } ) => (

                    <LinkNewWindow href={ link }>
                        <div className="flex items-center justify-center p-2 bg-white rounded-full hover:bg-orange-500 transition-colors duration-300 group">
                            <Icon className="text-lg text-blue-500 group-hover:text-white duration-300" />
                        </div>
                    </LinkNewWindow> 

                ))

            }
        </div>

    )
    
}
export default SocialIcons
