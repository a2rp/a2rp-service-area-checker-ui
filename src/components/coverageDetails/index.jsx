import React from "react";
import { Styled } from "./styled";

const CoverageDetails = ({ matchedRegion, hasSearched }) => {
    if (!hasSearched || !matchedRegion) {
        return null;
    }

    return (
        <Styled.Wrapper className="sectionSpace">
            <div className="container">
                <Styled.Grid>
                    <Styled.Card
                        className="glassCard"
                        data-aos="fade-right"
                        data-aos-delay="100"
                    >
                        <Styled.Eyebrow>Coverage Details</Styled.Eyebrow>
                        <Styled.Title>
                            Regional Service Coverage Information
                        </Styled.Title>
                        <Styled.Subtitle>
                            Your ZIP code falls under an active regional service
                            zone. The details below reflect dispatch logic,
                            branch coverage, and service operations for this
                            area.
                        </Styled.Subtitle>

                        <Styled.List>
                            <Styled.ListItem>
                                <Styled.Label>Service Region</Styled.Label>
                                <Styled.Value>
                                    {matchedRegion.name}
                                </Styled.Value>
                            </Styled.ListItem>

                            <Styled.ListItem>
                                <Styled.Label>Coverage Tier</Styled.Label>
                                <Styled.Value>
                                    {matchedRegion.tierLabel}
                                </Styled.Value>
                            </Styled.ListItem>

                            <Styled.ListItem>
                                <Styled.Label>Dispatch Radius</Styled.Label>
                                <Styled.Value>
                                    {matchedRegion.dispatchRadius}
                                </Styled.Value>
                            </Styled.ListItem>

                            <Styled.ListItem>
                                <Styled.Label>Nearest Hub</Styled.Label>
                                <Styled.Value>{matchedRegion.hub}</Styled.Value>
                            </Styled.ListItem>

                            <Styled.ListItem>
                                <Styled.Label>Weekend Support</Styled.Label>
                                <Styled.Value>
                                    {matchedRegion.weekendSupport}
                                </Styled.Value>
                            </Styled.ListItem>

                            <Styled.ListItem>
                                <Styled.Label>Emergency Routing</Styled.Label>
                                <Styled.Value>
                                    {matchedRegion.emergencyRouting}
                                </Styled.Value>
                            </Styled.ListItem>

                            <Styled.ListItem>
                                <Styled.Label>Branch Capacity</Styled.Label>
                                <Styled.Value>
                                    {matchedRegion.branchCapacity}
                                </Styled.Value>
                            </Styled.ListItem>
                        </Styled.List>
                    </Styled.Card>

                    <Styled.Card
                        className="glassCard"
                        data-aos="fade-left"
                        data-aos-delay="200"
                    >
                        <Styled.Eyebrow>Availability Logic</Styled.Eyebrow>
                        <Styled.Title>
                            Why Some Services May Vary by ZIP Code
                        </Styled.Title>
                        <Styled.Subtitle>
                            Service availability is determined by operational
                            factors that help regional teams maintain faster
                            response times and better technician routing.
                        </Styled.Subtitle>

                        <Styled.Reasons>
                            <Styled.ReasonCard>
                                <Styled.ReasonTitle>
                                    Technician Coverage
                                </Styled.ReasonTitle>
                                <Styled.ReasonText>
                                    Certain services require specialized
                                    technicians and are only enabled in zones
                                    where those teams are actively assigned.
                                </Styled.ReasonText>
                            </Styled.ReasonCard>

                            <Styled.ReasonCard>
                                <Styled.ReasonTitle>
                                    Branch Reach
                                </Styled.ReasonTitle>
                                <Styled.ReasonText>
                                    Service hubs operate within dispatch radius
                                    limits to keep travel time practical and
                                    service response consistent.
                                </Styled.ReasonText>
                            </Styled.ReasonCard>

                            <Styled.ReasonCard>
                                <Styled.ReasonTitle>
                                    Equipment Availability
                                </Styled.ReasonTitle>
                                <Styled.ReasonText>
                                    Specialized tools and service vehicles may
                                    only be available in selected regions or
                                    higher-priority zones.
                                </Styled.ReasonText>
                            </Styled.ReasonCard>

                            <Styled.ReasonCard>
                                <Styled.ReasonTitle>
                                    Dispatch Load
                                </Styled.ReasonTitle>
                                <Styled.ReasonText>
                                    Active service capacity can vary by area
                                    based on route load, scheduling demand, and
                                    emergency prioritization rules.
                                </Styled.ReasonText>
                            </Styled.ReasonCard>
                        </Styled.Reasons>
                    </Styled.Card>
                </Styled.Grid>
            </div>
        </Styled.Wrapper>
    );
};

export default CoverageDetails;
