// import { Link } from "react-router-dom";
import { SocialFollow } from "../../Social/SocialFollow";
import { CopyRightSection } from "./Copyright";
import { Footer } from "./Footer.styled";

export const FooterPage = () => {

    return (
        <Footer>

                 <SocialFollow/>
                <CopyRightSection/>
  
                         
            </Footer>
    )
}