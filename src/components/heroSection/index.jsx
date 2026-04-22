import React from "react";
import { Styled } from "./styled";

const HeroSection = () => {
    return (
        <Styled.Wrapper className="sectionSpace">
            <div className="container">
                <Styled.Inner>
                    <Styled.Content>
                        <Styled.Title data-aos="fade-up">
                            Check Service Availability by ZIP Code
                        </Styled.Title>

                        <Styled.Subtitle
                            data-aos="fade-up"
                            data-aos-delay="100"
                        >
                            Enter your ZIP code to see which home services are
                            available in your area, including plumbing,
                            electrical, drain cleaning, and emergency support.
                        </Styled.Subtitle>
                    </Styled.Content>

                    <Styled.Stats>
                        <Styled.StatCard
                            data-aos="zoom-in"
                            data-aos-delay="200"
                        >
                            <Styled.StatNumber>8</Styled.StatNumber>
                            <Styled.StatLabel>Core Services</Styled.StatLabel>
                        </Styled.StatCard>

                        <Styled.StatCard
                            data-aos="zoom-in"
                            data-aos-delay="300"
                        >
                            <Styled.StatNumber>3</Styled.StatNumber>
                            <Styled.StatLabel>Regional Hubs</Styled.StatLabel>
                        </Styled.StatCard>

                        <Styled.StatCard
                            data-aos="zoom-in"
                            data-aos-delay="400"
                        >
                            <Styled.StatNumber>24/7</Styled.StatNumber>
                            <Styled.StatLabel>
                                Emergency Support
                            </Styled.StatLabel>
                        </Styled.StatCard>

                        <Styled.StatCard
                            data-aos="zoom-in"
                            data-aos-delay="500"
                        >
                            <Styled.StatNumber>Same Day</Styled.StatNumber>
                            <Styled.StatLabel>Fast Dispatch</Styled.StatLabel>
                        </Styled.StatCard>
                    </Styled.Stats>
                </Styled.Inner>
            </div>
        </Styled.Wrapper>
    );
};

export default HeroSection;
