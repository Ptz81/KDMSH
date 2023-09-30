import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faYoutube,
  faFacebook,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";
import { SocialContainer, SocialTitle } from "./SocialFollow.styled";
import { Link} from "react-router-dom";

export const SocialFollow = () => {
    return (
        <SocialContainer >
      <SocialTitle>Слідкуйте за нами у соцмережах</SocialTitle>
      <Link to="https://www.youtube.com/@user-ck5dw5yi1l/videos"
        className="youtube social" target = "_blank">
        <FontAwesomeIcon style={{ color: '#eb3223', marginRight: "20px"}} icon={faYoutube} size="2x" />
      </Link>
      <Link to="https://www.facebook.com/kdmsh22"
        className="facebook social" target = "_blank">
        <FontAwesomeIcon style={{ color: '#4968ad', backgroundColor: "#fff", borderRadius: '50%' ,marginRight: "20px"}} icon={faFacebook} size="2x" />
      </Link>
      <Link to="https://www.instagram.com/kdmsh22/"
        className="instagram social" target = "_blank">
        <FontAwesomeIcon style={{ color: '#ff4d4d'}} icon={faInstagram} size="2x" />
      </Link>
        </SocialContainer>
    )
}