import React from "react";
import { Styled } from "./styled";

const coverageLabelMap = {
    full: "Full Coverage",
    partial: "Partial Coverage",
    unavailable: "Out of Service Area",
};

const coverageClassMap = {
    full: "availableBadge",
    partial: "limitedBadge",
    unavailable: "unavailableBadge",
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

    const coverageClassName =
        coverageClassMap[coverageStatus] || "availableBadge";

    return (
        <Styled.Wrapper className="sectionSpace">
            <div className="container">
                <Styled.Card
                    className="glassCard"
                    data-aos="fade-up"
                    data-aos-delay="100"
                >
                    <Styled.TopRow>
                        <Styled.Content>
                            <Styled.Eyebrow>Coverage Summary</Styled.Eyebrow>
                            <Styled.Title>
                                {isOutOfArea
                                    ? "This ZIP code is currently outside the active service area"
                                    : "Service coverage found for your ZIP code"}
                            </Styled.Title>
                            <Styled.Subtitle>
                                {isOutOfArea
                                    ? "We do not currently serve this ZIP code. Please try a nearby supported area or contact support for assistance."
                                    : "Your ZIP code has been matched with the nearest regional service hub and available service set."}
                            </Styled.Subtitle>
                        </Styled.Content>

                        <Styled.StatusWrap>
                            <span
                                className={`statusBadge ${coverageClassName}`}
                            >
                                {coverageLabel}
                            </span>
                        </Styled.StatusWrap>
                    </Styled.TopRow>

                    <Styled.Grid>
                        <Styled.InfoCard
                            data-aos="fade-up"
                            data-aos-delay="150"
                        >
                            <Styled.InfoLabel>ZIP Code</Styled.InfoLabel>
                            <Styled.InfoValue>
                                {submittedZip || "-"}
                            </Styled.InfoValue>
                        </Styled.InfoCard>

                        <Styled.InfoCard
                            data-aos="fade-up"
                            data-aos-delay="250"
                        >
                            <Styled.InfoLabel>Region</Styled.InfoLabel>
                            <Styled.InfoValue>
                                {matchedRegion?.name || "Not Available"}
                            </Styled.InfoValue>
                        </Styled.InfoCard>

                        <Styled.InfoCard
                            data-aos="fade-up"
                            data-aos-delay="350"
                        >
                            <Styled.InfoLabel>Nearest Hub</Styled.InfoLabel>
                            <Styled.InfoValue>
                                {matchedRegion?.hub || "Not Assigned"}
                            </Styled.InfoValue>
                        </Styled.InfoCard>

                        <Styled.InfoCard
                            data-aos="fade-up"
                            data-aos-delay="450"
                        >
                            <Styled.InfoLabel>
                                Estimated Response
                            </Styled.InfoLabel>
                            <Styled.InfoValue>
                                {matchedRegion?.eta || "Unavailable"}
                            </Styled.InfoValue>
                        </Styled.InfoCard>
                    </Styled.Grid>
                </Styled.Card>
            </div>
        </Styled.Wrapper>
    );
};

export default ResultSummary;
