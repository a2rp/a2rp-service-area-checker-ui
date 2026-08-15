import { FiActivity, FiClock, FiMap, FiShield } from "react-icons/fi";

import { Styled } from "./styled";

const trustItems = [
    {
        icon: FiMap,
        value: "Regional",
        label: "Coverage Mapping",
        description:
            "ZIP-based lookup helps identify active service regions and nearby operational hubs.",
    },
    {
        icon: FiClock,
        value: "24/7",
        label: "Status Visibility",
        description:
            "Coverage information remains available whenever you need to check service reach.",
    },
    {
        icon: FiShield,
        value: "No Signup",
        label: "Simple Lookup",
        description:
            "Check availability directly without creating an account or sharing unnecessary details.",
    },
    {
        icon: FiActivity,
        value: "Instant",
        label: "Service Response",
        description:
            "Coverage results are generated immediately from the configured regional service data.",
    },
];

const TrustStrip = () => {
    return (
        <Styled.Wrapper className="trustStrip">
            <div className="trustInner">
                <div className="trustIntro">
                    <span className="eyebrow">NETWORK CONFIDENCE</span>

                    <h2>
                        Clear coverage.
                        <span>Better decisions.</span>
                    </h2>

                    <p>
                        The checker is designed to make service availability
                        easier to understand before scheduling or contacting
                        support.
                    </p>
                </div>

                <div className="trustGrid">
                    {trustItems.map((item, index) => {
                        const Icon = item.icon;

                        return (
                            <article key={item.label}>
                                <div className="itemTop">
                                    <span className="itemNumber">
                                        {String(index + 1).padStart(2, "0")}
                                    </span>

                                    <span className="itemIcon">
                                        <Icon />
                                    </span>
                                </div>

                                <strong className="itemValue">
                                    {item.value}
                                </strong>

                                <h3>{item.label}</h3>

                                <p>{item.description}</p>
                            </article>
                        );
                    })}
                </div>

                <div className="networkFooter">
                    <div className="networkState">
                        <span className="liveDot" />

                        <div>
                            <span>SYSTEM STATUS</span>
                            <strong>Service checker operational</strong>
                        </div>
                    </div>

                    <div className="networkLine">
                        <span />
                    </div>

                    <span className="networkMessage">
                        Built for fast service-area discovery
                    </span>
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default TrustStrip;
