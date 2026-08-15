import {
    FiAlertTriangle,
    FiCheckCircle,
    FiClock,
    FiMapPin,
    FiNavigation,
} from "react-icons/fi";

import { Styled } from "./styled";

const coverageLabelMap = {
    full: "Full Coverage",
    partial: "Partial Coverage",
    unavailable: "Out of Service Area",
};

const coverageClassMap = {
    full: "available",
    partial: "limited",
    unavailable: "unavailable",
};

const ResultSummary = ({ submittedZip, matchedRegion, hasSearched }) => {
    if (!hasSearched) {
        return null;
    }

    const isOutOfArea = !matchedRegion;

    const coverageStatus = isOutOfArea
        ? "unavailable"
        : matchedRegion.coverageStatus;

    const coverageLabel =
        coverageLabelMap[coverageStatus] || "Coverage Available";

    const coverageClassName = coverageClassMap[coverageStatus] || "available";

    const StatusIcon =
        coverageStatus === "unavailable" ? FiAlertTriangle : FiCheckCircle;

    return (
        <Styled.Wrapper className="resultSummary">
            <div className="resultInner">
                <div className={`resultCard ${coverageClassName}`}>
                    <div className="statusColumn">
                        <div className="statusIcon">
                            <StatusIcon />
                        </div>

                        <span className="statusLabel">Coverage result</span>

                        <strong className="statusValue">{coverageLabel}</strong>

                        <span className="statusZip">
                            ZIP {submittedZip || "-"}
                        </span>
                    </div>

                    <div className="resultContent">
                        <div className="resultHeader">
                            <div>
                                <span className="eyebrow">
                                    SERVICE NETWORK RESPONSE
                                </span>

                                <h2>
                                    {isOutOfArea
                                        ? "This area is not active yet."
                                        : "Your area is covered."}
                                </h2>
                            </div>

                            <span
                                className={`coverageBadge ${coverageClassName}`}
                            >
                                <i />
                                {coverageLabel}
                            </span>
                        </div>

                        <p className="resultDescription">
                            {isOutOfArea
                                ? "We could not match this ZIP code with an active regional service hub. You can try another nearby ZIP code or check back later as coverage expands."
                                : "We matched your ZIP code with an active service region. Review the assigned hub, estimated response window, and service availability below."}
                        </p>

                        <div className="resultGrid">
                            <article>
                                <span className="infoIcon">
                                    <FiMapPin />
                                </span>

                                <div>
                                    <span className="infoLabel">ZIP Code</span>

                                    <strong>{submittedZip || "-"}</strong>
                                </div>
                            </article>

                            <article>
                                <span className="infoIcon">
                                    <FiNavigation />
                                </span>

                                <div>
                                    <span className="infoLabel">Region</span>

                                    <strong>
                                        {matchedRegion?.name || "Not Available"}
                                    </strong>
                                </div>
                            </article>

                            <article>
                                <span className="infoIcon">
                                    <FiMapPin />
                                </span>

                                <div>
                                    <span className="infoLabel">
                                        Nearest Hub
                                    </span>

                                    <strong>
                                        {matchedRegion?.hub || "Not Assigned"}
                                    </strong>
                                </div>
                            </article>

                            <article>
                                <span className="infoIcon">
                                    <FiClock />
                                </span>

                                <div>
                                    <span className="infoLabel">
                                        Estimated Response
                                    </span>

                                    <strong>
                                        {matchedRegion?.eta || "Unavailable"}
                                    </strong>
                                </div>
                            </article>
                        </div>

                        <div className="resultFooter">
                            <span>
                                <i />
                                Live coverage lookup completed
                            </span>

                            <span>Result generated for {submittedZip}</span>
                        </div>
                    </div>
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default ResultSummary;
