import React, { useMemo } from "react";
import { servicesData } from "../../data/servicesData";
import ServiceCard from "../serviceCard";
import { Styled } from "./styled";

const ServicesGrid = ({ matchedRegion, hasSearched }) => {
    const mergedServices = useMemo(() => {
        return servicesData.map((service) => {
            const regionService = matchedRegion?.services?.[service.id];

            return {
                ...service,
                status: regionService?.status || "unavailable",
                note: regionService?.note || "Not available in this ZIP code.",
            };
        });
    }, [matchedRegion]);

    const counts = useMemo(() => {
        return mergedServices.reduce(
            (accumulator, service) => {
                if (service.status === "available") {
                    accumulator.available += 1;
                }

                if (service.status === "limited") {
                    accumulator.limited += 1;
                }

                if (service.status === "unavailable") {
                    accumulator.unavailable += 1;
                }

                return accumulator;
            },
            {
                available: 0,
                limited: 0,
                unavailable: 0,
            },
        );
    }, [mergedServices]);

    if (!hasSearched) {
        return null;
    }

    return (
        <Styled.Wrapper className="sectionSpace">
            <div className="container">
                <Styled.Header>
                    <Styled.Content>
                        <Styled.Eyebrow data-aos="fade-up">
                            Service Availability
                        </Styled.Eyebrow>

                        <Styled.Title data-aos="fade-up" data-aos-delay="100">
                            Available Services in Your Area
                        </Styled.Title>

                        <Styled.Subtitle
                            data-aos="fade-up"
                            data-aos-delay="200"
                        >
                            Review the service list matched to your ZIP code.
                            Each card shows whether the service is fully
                            available, partially supported, or currently
                            unavailable in your area.
                        </Styled.Subtitle>
                    </Styled.Content>

                    <Styled.Counts>
                        <Styled.CountCard
                            className="glassCard"
                            data-aos="zoom-in"
                            data-aos-delay="100"
                        >
                            <Styled.CountNumber>
                                {counts.available}
                            </Styled.CountNumber>
                            <Styled.CountLabel className="availableText">
                                Available
                            </Styled.CountLabel>
                        </Styled.CountCard>

                        <Styled.CountCard
                            className="glassCard"
                            data-aos="zoom-in"
                            data-aos-delay="200"
                        >
                            <Styled.CountNumber>
                                {counts.limited}
                            </Styled.CountNumber>
                            <Styled.CountLabel className="limitedText">
                                Limited
                            </Styled.CountLabel>
                        </Styled.CountCard>

                        <Styled.CountCard
                            className="glassCard"
                            data-aos="zoom-in"
                            data-aos-delay="300"
                        >
                            <Styled.CountNumber>
                                {counts.unavailable}
                            </Styled.CountNumber>
                            <Styled.CountLabel className="unavailableText">
                                Unavailable
                            </Styled.CountLabel>
                        </Styled.CountCard>
                    </Styled.Counts>
                </Styled.Header>

                <Styled.Grid>
                    {mergedServices.map((service, index) => (
                        <ServiceCard
                            key={service.id}
                            service={service}
                            index={index}
                        />
                    ))}
                </Styled.Grid>
            </div>
        </Styled.Wrapper>
    );
};

export default ServicesGrid;
