import { FiCheckCircle, FiMapPin, FiSearch, FiServer } from "react-icons/fi";

import { Styled } from "./styled";

const steps = [
    {
        number: "01",
        icon: FiSearch,
        title: "Enter ZIP Code",
        description:
            "Start with your 6-digit ZIP code so the checker can identify the correct regional coverage zone.",
    },
    {
        number: "02",
        icon: FiServer,
        title: "Match Service Region",
        description:
            "The system compares your location with active service hubs, regional rules, and operational coverage data.",
    },
    {
        number: "03",
        icon: FiMapPin,
        title: "Review Local Coverage",
        description:
            "See the matched region, nearest hub, dispatch radius, support status, and service-specific availability.",
    },
    {
        number: "04",
        icon: FiCheckCircle,
        title: "Know Before Booking",
        description:
            "Use the result to understand whether services are available, limited, or currently outside the service area.",
    },
];

const HowItWorks = () => {
    return (
        <Styled.Wrapper className="howItWorks">
            <div className="sectionGrid" />

            <div className="howInner">
                <div className="sectionHeader">
                    <div>
                        <span className="eyebrow">04 / HOW IT WORKS</span>

                        <h2>
                            From ZIP code
                            <span>to coverage.</span>
                        </h2>
                    </div>

                    <div className="headerInfo">
                        <span className="liveBadge">
                            <i />
                            Coverage engine online
                        </span>

                        <p>
                            A simple four-step lookup turns a ZIP code into a
                            clear service availability result.
                        </p>
                    </div>
                </div>

                <div className="processGrid">
                    {steps.map((step) => {
                        const Icon = step.icon;

                        return (
                            <article key={step.number} className="processCard">
                                <div className="cardHeader">
                                    <span className="stepNumber">
                                        {step.number}
                                    </span>

                                    <span className="stepIcon">
                                        <Icon />
                                    </span>
                                </div>

                                <div className="connector">
                                    <span />
                                </div>

                                <div className="cardContent">
                                    <span className="stepLabel">
                                        STEP {step.number}
                                    </span>

                                    <h3>{step.title}</h3>

                                    <p>{step.description}</p>
                                </div>
                            </article>
                        );
                    })}
                </div>

                <div className="processFooter">
                    <div className="processStatus">
                        <span className="statusIcon">
                            <FiCheckCircle />
                        </span>

                        <div>
                            <span>LOOKUP PROCESS</span>
                            <strong>
                                Fast, clear, location-based availability
                            </strong>
                        </div>
                    </div>

                    <div className="processMeta">
                        <span>
                            <strong>01</strong>
                            ZIP input
                        </span>

                        <span>
                            <strong>02</strong>
                            Region match
                        </span>

                        <span>
                            <strong>03</strong>
                            Coverage data
                        </span>

                        <span>
                            <strong>04</strong>
                            Service result
                        </span>
                    </div>
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default HowItWorks;
