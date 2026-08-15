import {
    FiArrowUpRight,
    FiCodepen,
    FiFacebook,
    FiGithub,
    FiLinkedin,
    FiMail,
    FiMapPin,
    FiYoutube,
} from "react-icons/fi";

import { Styled } from "./styled";

const projectLinks = [
    {
        label: "Repository",
        href: "https://github.com/a2rp/service-area-checker-ui",
    },
    {
        label: "Portfolio",
        href: "https://www.ashishranjan.net",
    },
    {
        label: "Support",
        href: "https://a2rp-donation-page.netlify.app/",
    },
];

const socialLinks = [
    {
        label: "GitHub",
        href: "https://github.com/a2rp",
        icon: FiGithub,
    },
    {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/aashishranjan",
        icon: FiLinkedin,
    },
    {
        label: "CodePen",
        href: "https://codepen.io/ash1198",
        icon: FiCodepen,
    },
    {
        label: "Facebook",
        href: "https://www.facebook.com/theash.ashish/",
        icon: FiFacebook,
    },
    {
        label: "YouTube",
        href: "https://www.youtube.com/@ashishranjan-ashz?sub_confirmation=1",
        icon: FiYoutube,
    },
];

const Footer = () => {
    return (
        <Styled.Wrapper className="footer">
            <div className="footerInner">
                <div className="footerTop">
                    <div className="brandColumn">
                        <div className="brand">
                            <span className="brandIcon">
                                <FiMapPin />
                            </span>

                            <span className="brandText">
                                <strong>Service Area</strong>
                                <span>Checker UI</span>
                            </span>
                        </div>

                        <p>
                            A modern service-area availability interface for
                            checking ZIP-based regional coverage and supported
                            services.
                        </p>

                        <a
                            className="emailLink"
                            href="mailto:ash.ranjan09@gmail.com"
                        >
                            <FiMail />
                            ash.ranjan09@gmail.com
                        </a>
                    </div>

                    <div className="linkColumn">
                        <span className="columnLabel">PROJECT</span>

                        <div className="footerLinks">
                            {projectLinks.map((link) => (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <span>{link.label}</span>
                                    <FiArrowUpRight />
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="linkColumn">
                        <span className="columnLabel">CONNECT</span>

                        <div className="socialGrid">
                            {socialLinks.map((link) => {
                                const Icon = link.icon;

                                return (
                                    <a
                                        key={link.label}
                                        href={link.href}
                                        target="_blank"
                                        rel="noreferrer"
                                        aria-label={link.label}
                                    >
                                        <Icon />
                                        <span>{link.label}</span>
                                        <FiArrowUpRight />
                                    </a>
                                );
                            })}
                        </div>
                    </div>
                </div>

                <div className="footerDivider" />

                <div className="footerBottom">
                    <div className="copyright">
                        <span>© 2026 Ashish Ranjan</span>
                        <span>All rights reserved.</span>
                    </div>

                    <div className="buildMeta">
                        <span>
                            <i />
                            Interface operational
                        </span>

                        <span>React + Vite</span>
                    </div>
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default Footer;
