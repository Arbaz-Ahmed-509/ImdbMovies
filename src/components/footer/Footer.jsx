import React from "react";
import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaLinkedin,
} from "react-icons/fa";

import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./style.scss";

const Footer = () => {
    return (
        <footer className="footer">
            <ContentWrapper>
                <ul className="menuItems">
                    <li className="menuItem">Terms Of Use</li>
                    <li className="menuItem">Privacy-Policy</li>
                    <li className="menuItem">About</li>
                    {/* <li className="menuItem">Blog</li>
                    <li className="menuItem">FAQ</li> */}
                </ul>
                <div className="infoText">
                    TMDb, or The Movie Database, is an extensive online repository of movie and TV show information. It provides details about films, shows, and celebrities, making it a valuable resource for film enthusiasts and industry professionals. Developers can also use its API to integrate movie-related data into their applications. TMDb is a go-to platform for movie information and a global community of movie lovers.
                </div>
                <div className="socialIcons">
                    <span className="icon">
                        <FaFacebookF />
                    </span>
                    <span className="icon">
                        <FaInstagram />
                    </span>
                    <span className="icon">
                        <FaTwitter />
                    </span>
                    <span className="icon">
                        <FaLinkedin />
                    </span>
                </div>
                <div>
                    <p className="copyright">
                        Cloned by @ Arbaz Ahmed...
                    </p>
                </div>
            </ContentWrapper>
        </footer>
    );
};

export default Footer;
