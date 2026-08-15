import React from "react";
import {
    FiArrowDown,
    FiCheckCircle,
    FiClock,
    FiMap,
    FiMapPin,
    FiShield,
    FiZap,
} from "react-icons/fi";

import { Styled } from "./styled";

const HeroSection = ({ onGoChecker, onGoCoverage }) => {
    return (
        <Styled.Wrapper className="heroSection">
            <div className="heroGrid" />

            <div className="heroGlow heroGlowOne" />
            <div className="heroGlow heroGlowTwo" />

            <div className="heroInner">
                <div className="heroContent">
                    <div className="eyebrow">
                        <span className="statusDot" />
                        <span>Service Network Online</span>
                    </div>

                    <h1>
                        Know what's available
                        <span>before you book.</span>
                    </h1>

                    <p className="heroDescription">
                        Check your ZIP code to instantly see service
                        availability, regional coverage, dispatch status, and
                        supported home services in your area.
                    </p>

                    <div className="heroActions">
                        <button
                            className="primaryAction"
                            type="button"
                            onClick={onGoChecker}
                        >
                            Check my ZIP code
                            <FiArrowDown />
                        </button>

                        <button
                            className="secondaryAction"
                            type="button"
                            onClick={onGoCoverage}
                        >
                            <FiMap />
                            Explore coverage
                        </button>
                    </div>

                    <div className="trustRow">
                        <span>
                            <FiCheckCircle />
                            Instant availability check
                        </span>

                        <span>
                            <FiShield />
                            No signup required
                        </span>

                        <span>
                            <FiClock />
                            24/7 status visibility
                        </span>
                    </div>
                </div>

                <div className="heroPanel">
                    <div className="panelHeader">
                        <div>
                            <span>NETWORK OVERVIEW</span>
                            <strong>Coverage Status</strong>
                        </div>

                        <span className="liveStatus">
                            <i />
                            Live
                        </span>
                    </div>

                    <div className="mapPreview">
                        <div className="mapGrid" />

                        <span className="mapPoint pointOne">
                            <i />
                            North
                        </span>

                        <span className="mapPoint pointTwo">
                            <i />
                            Central
                        </span>

                        <span className="mapPoint pointThree">
                            <i />
                            South
                        </span>

                        <div className="mapCenter">
                            <FiMapPin />
                        </div>
                    </div>

                    <div className="panelStats">
                        <article>
                            <span>01</span>
                            <strong>8</strong>
                            <p>Core services</p>
                        </article>

                        <article>
                            <span>02</span>
                            <strong>3</strong>
                            <p>Regional hubs</p>
                        </article>

                        <article>
                            <span>03</span>
                            <strong>24/7</strong>
                            <p>Emergency support</p>
                        </article>

                        <article>
                            <span>04</span>
                            <strong>
                                <FiZap />
                                Fast
                            </strong>
                            <p>Dispatch response</p>
                        </article>
                    </div>
                </div>
            </div>

            <div className="heroFooter">
                <span>SCROLL TO CHECK AVAILABILITY</span>

                <button
                    type="button"
                    onClick={onGoChecker}
                    aria-label="Go to ZIP checker"
                >
                    <FiArrowDown />
                </button>
            </div>
        </Styled.Wrapper>
    );
};

export default HeroSection;
