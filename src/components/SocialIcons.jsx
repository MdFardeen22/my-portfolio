import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaWhatsapp } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const socials = [
  {
    id: "github",
    name: "GitHub",
    username: "@MdFardeen22",
    about: "Developer Profile",
    link: "https://github.com/MdFardeen22",
    icon: <FaGithub />
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    username: "@MdFardeen",
    about: "Professional Network",
    link: "https://linkedin.com/in/fardeenmd",
    icon: (
      <svg fill="currentColor" viewBox="0 0 448 512" height="1em" xmlns="http://www.w3.org/2000/svg">
        <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
      </svg>
    )
  },
  {
    id: "gmail",
    name: "Gmail",
    username: "fardeenmd63",
    about: "Send an Email",
    link: "mailto:fardeenmd63@gmail.com",
    icon: <MdEmail />
  },
  {
    id: "whatsapp",
    name: "WhatsApp",
    username: "+91 82109...",
    about: "Direct Message",
    link: "https://wa.me/+918210925645",
    icon: <FaWhatsapp />
  },
  {
    id: "instagram",
    name: "Instagram",
    username: "@_fardeen_qureshi",
    about: "Photos & Life",
    link: "https://www.instagram.com/_fardeen_qureshi",
    icon: (
      <svg fill="currentColor" className="svgIcon" viewBox="0 0 448 512" height="1.5em" xmlns="http://www.w3.org/2000/svg">
        <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
      </svg>
    )
  },
  {
    id: "facebook",
    name: "Facebook",
    username: "@FardeenQureshi",
    about: "500+ Friends",
    link: "https://www.facebook.com/mdfardeen.quraishi",
    icon: (
      <svg viewBox="0 0 40 40" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg">
        <path d="m27.8 25.6.9-5.6h-5.3v-3.9c0-1.6.6-2.8 3-2.8H29V8.2c-1.4-.2-3-.4-4.4-.4-4.6 0-7.8 2.8-7.8 7.8V20h-5v5.6h5v14.1c1.1.2 2.2.3 3.3.3 1.1 0 2.2-.1 3.3-.3V25.6h4.4z" fill="currentColor" />
      </svg>
    )
  }
];

const SocialIcons = () => {
  return (
    <StyledWrapper>
      {socials.map((item, index) => (
        <div className={`tooltip-container ${item.id}`} key={index}>
          <div className="tooltip">
            <div className="profile">
              <div className="user">
                <div className="img">{item.icon}</div>
                <div className="details">
                  <div className="name">{item.name}</div>
                  <div className="username">{item.username}</div>
                </div>
              </div>
              <div className="about">{item.about}</div>
            </div>
          </div>
          <div className="text-container">
            <a className="icon" href={item.link} target="_blank" rel="noreferrer">
              <div className="layer">
                <span />
                <span />
                <span />
                <span />
                <span className={`${item.id}SVG svg-container`}>
                  {item.icon}
                </span>
              </div>
              <div className="text">{item.name}</div>
            </a>
          </div>
        </div>
      ))}
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  display: flex;
  gap: 25px;
  flex-wrap: wrap;
  justify-content: center;

  /* Universal Tooltip Structure */
  .tooltip-container {
    position: relative;
    cursor: pointer;
    transition: all 0.2s;
    font-size: 17px;
    border-radius: 10px;
  }

  .tooltip {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    padding: 10px;
    opacity: 0;
    pointer-events: none;
    transition: all 0.3s;
    border-radius: 15px;
    box-shadow: inset 5px 5px 5px rgba(0, 0, 0, 0.2),
      inset -5px -5px 15px rgba(255, 255, 255, 0.1),
      5px 5px 15px rgba(0, 0, 0, 0.3), -5px -5px 15px rgba(255, 255, 255, 0.1);
    z-index: 20;
    width: max-content;
  }

  .profile {
    border-radius: 10px 15px;
    padding: 10px;
    border: 1px solid transparent;
  }

  .tooltip-container:hover .tooltip {
    top: -150px;
    opacity: 1;
    visibility: visible;
    pointer-events: auto;
  }

  .icon {
    text-decoration: none;
    color: #fff;
    display: block;
    position: relative;
  }

  /* Force identical shape/size for all rings */
  .layer {
    width: 55px;
    height: 55px;
    transition: transform 0.3s;
    position: relative;
    border-radius: 50%;
  }

  .icon:hover .layer {
    transform: rotate(-35deg) skew(20deg);
  }

  .layer span {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    border: 1px solid #fff;
    transition: all 0.3s;
    border-radius: 50%;
  }

  .icon .text {
    position: absolute;
    left: 50%;
    bottom: -5px;
    opacity: 0;
    font-weight: 500;
    transform: translateX(-50%);
    transition: bottom 0.3s ease, opacity 0.3s ease;
  }

  .icon:hover .text {
    bottom: -35px;
    opacity: 1;
  }

  .icon:hover .layer span:nth-child(1) { opacity: 0.2; }
  .icon:hover .layer span:nth-child(2) { opacity: 0.4; transform: translate(5px, -5px); }
  .icon:hover .layer span:nth-child(3) { opacity: 0.6; transform: translate(10px, -10px); }
  .icon:hover .layer span:nth-child(4) { opacity: 0.8; transform: translate(15px, -15px); }
  .icon:hover .layer span:nth-child(5) { opacity: 1; transform: translate(20px, -20px); }

  .user { display: flex; gap: 10px; }
  .img {
    width: 50px; height: 50px; font-size: 25px; font-weight: 700;
    border: 1px solid; border-radius: 10px;
    display: flex; align-items: center; justify-content: center;
    background: #fff;
  }
  .name { font-size: 17px; font-weight: 700; }
  .details { display: flex; flex-direction: column; gap: 0; color: #fff; text-align: left; }
  .about { color: #ccc; padding-top: 5px; font-size: 14px; text-align: left; }
  .username { font-size: 14px; color: #ccc; }

  /* Ensure SVGs inside the container are visible and perfectly centered */
  .svg-container {
    display: flex; align-items: center; justify-content: center;
    border-radius: 50%;
  }
  .svg-container svg {
    width: 28px;
    height: 28px;
    z-index: 10;
  }

  /* --- SPECIFIC PLATFORM COLORS & SHADOWS --- */
  
  /* Facebook */
  .facebook .profile { background: #3b5998; border-color: #29487d; }
  .facebook .layer { border: 3px solid #1877f2; box-shadow: 0 0 15px rgba(24, 119, 242, 0.7), 0 0 20px rgba(24, 119, 242, 0.5); }
  .facebook .icon:hover .layer { box-shadow: 0 0 30px rgba(24, 119, 242, 1), 0 0 40px rgba(24, 119, 242, 0.7); }
  .facebook .layer span { border-color: #1877f2; color: #1877f2; }
  .facebook .icon:hover .layer span { box-shadow: -1px 1px 3px #1877f2; }
  .facebook .text { color: #1877f2; }
  .facebook .layer span.facebookSVG { background: #000; color: #1877f2; }
  .facebook .img { border-color: #1877f2; color: #1877f2; }
  .facebook .name { color: #1877f2; }

  /* Instagram */
  .instagram .profile { background: #2a2b2f; border-color: #52382f; }
  .instagram .layer { border: 3px solid #e6683c; box-shadow: 0 0 15px rgba(230, 104, 60, 0.4), 0 0 20px rgba(230, 104, 60, 0.2); }
  .instagram .icon:hover .layer { box-shadow: 0 0 30px rgba(230, 104, 60, 0.8), 0 0 40px rgba(230, 104, 60, 0.5); }
  .instagram .layer span { border-color: #e6683c; color: #e6683c; }
  .instagram .icon:hover .layer span { box-shadow: -1px 1px 3px #e6683c; }
  .instagram .text { color: #e6683c; }
  .instagram .layer span.instagramSVG { background: #000; color: #e6683c; }
  .instagram .img { border-color: #e6683c; color: #e6683c; }
  .instagram .name { color: #e6683c; }

  /* LinkedIn */
  .linkedin .profile { background: #2a2b2f; border-color: rgba(11, 63, 95, 1); }
  .linkedin .layer { border: 3px solid #1da1f2; box-shadow: 0 0 15px rgba(29, 161, 242, 0.4), 0 0 20px rgba(29, 161, 242, 0.2); }
  .linkedin .icon:hover .layer { box-shadow: 0 0 30px rgba(29, 161, 242, 0.8), 0 0 40px rgba(29, 161, 242, 0.5); }
  .linkedin .layer span { border-color: #1da1f2; color: #1da1f2; }
  .linkedin .icon:hover .layer span { box-shadow: -1px 1px 3px #1da1f2; }
  .linkedin .text { color: #1da1f2; }
  .linkedin .layer span.linkedinSVG { background: #000; fill: #1da1f2; color: #1da1f2; }
  .linkedin .img { border-color: #1da1f2; color: #1da1f2; }
  .linkedin .name { color: #1da1f2; }

  /* GitHub */
  .github .profile { background: #1b1b1b; border-color: #333; }
  .github .layer { border: 3px solid #fff; box-shadow: 0 0 15px rgba(255, 255, 255, 0.3), 0 0 20px rgba(255, 255, 255, 0.2); }
  .github .icon:hover .layer { box-shadow: 0 0 30px rgba(255, 255, 255, 0.6), 0 0 40px rgba(255, 255, 255, 0.4); }
  .github .layer span { border-color: #fff; color: #fff; }
  .github .icon:hover .layer span { box-shadow: -1px 1px 3px #fff; }
  .github .text { color: #fff; }
  .github .layer span.githubSVG { background: #000; color: #fff; border: 1px solid rgba(255,255,255,0.2); }
  .github .img { border-color: #fff; color: #000; }
  .github .name { color: #fff; }

  /* Gmail */
  .gmail .profile { background: #321111; border-color: #8c2a2a; }
  .gmail .layer { border: 3px solid #ea4335; box-shadow: 0 0 15px rgba(234, 67, 53, 0.4), 0 0 20px rgba(234, 67, 53, 0.2); }
  .gmail .icon:hover .layer { box-shadow: 0 0 30px rgba(234, 67, 53, 0.8), 0 0 40px rgba(234, 67, 53, 0.5); }
  .gmail .layer span { border-color: #ea4335; color: #ea4335; }
  .gmail .icon:hover .layer span { box-shadow: -1px 1px 3px #ea4335; }
  .gmail .text { color: #ea4335; }
  .gmail .layer span.gmailSVG { background: #000; color: #ea4335; }
  .gmail .img { border-color: #ea4335; color: #ea4335; }
  .gmail .name { color: #ea4335; }

  /* WhatsApp */
  .whatsapp .profile { background: #11321f; border-color: #1f6b40; }
  .whatsapp .layer { border: 3px solid #25d366; box-shadow: 0 0 15px rgba(37, 211, 102, 0.4), 0 0 20px rgba(37, 211, 102, 0.2); }
  .whatsapp .icon:hover .layer { box-shadow: 0 0 30px rgba(37, 211, 102, 0.8), 0 0 40px rgba(37, 211, 102, 0.5); }
  .whatsapp .layer span { border-color: #25d366; color: #25d366; }
  .whatsapp .icon:hover .layer span { box-shadow: -1px 1px 3px #25d366; }
  .whatsapp .text { color: #25d366; }
  .whatsapp .layer span.whatsappSVG { background: #000; color: #25d366; }
  .whatsapp .img { border-color: #25d366; color: #25d366; }
  .whatsapp .name { color: #25d366; }
`;

export default SocialIcons;
