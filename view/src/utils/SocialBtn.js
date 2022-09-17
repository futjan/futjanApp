import React from "react";
import {
  FacebookShareButton,
  FacebookIcon,
  WhatsappShareButton,
  WhatsappIcon,
  TwitterIcon,
  TwitterShareButton,
  LinkedinShareButton,
  LinkedinIcon,
} from "react-share";

function SocialBtn(props) {
  return (
    <div className="socials">
      <div>
        <FacebookShareButton
          url={`http://www.futjan.com/${props.type}/${props.id}`}
        >
          <FacebookIcon size={22} round />
        </FacebookShareButton>
      </div>
      <div>
        <WhatsappShareButton
          url={`http://www.futjan.com/${props.type}/${props.id}`}
        >
          <WhatsappIcon size={22} round />
        </WhatsappShareButton>
      </div>
      <div>
        <TwitterShareButton
          url={`http://www.futjan.com/${props.type}/${props.id}`}
        >
          <TwitterIcon size={22} round />
        </TwitterShareButton>
      </div>
      <div>
        <LinkedinShareButton
          url={`http://www.futjan.com/${props.type}/${props.id}`}
        >
          <LinkedinIcon size={22} round />
        </LinkedinShareButton>
      </div>
    </div>
  );
}
export default React.memo(SocialBtn);
