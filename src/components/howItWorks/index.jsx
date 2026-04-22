import React from "react";
import { FiMapPin, FiLayers, FiCheckCircle } from "react-icons/fi";
import { Styled } from "./styled";

const steps = [
    {
        id: 1,
        icon: <FiMapPin />,
        title: "Enter ZIP Code",
        description:
            "Start by entering a valid ZIP code to check whether your location falls inside an active service area.",
    },
    {
        id: 2,
        icon: <FiLayers />,
        title: "Match Service Region",
        description:
            "The system maps your ZIP code to the nearest supported service cluster using regional coverage logic.",
    },
    {
        id: 3,
        icon: <FiCheckCircle />,
        title: "View Available Services",
        description:
            "See which services are fully available, partially supported, or currently unavailable in that area.",
    },
];

const HowItWorks = () => {
    return (
        <Styled.Wrapper className="sectionSpace">
            <div className="container">
                <Styled.Header>
                    <Styled.Eyebrow data-aos="fade-up">
                        How It Works
                    </Styled.Eyebrow>

                    <Styled.Title data-aos="fade-up" data-aos-delay="100">
                        Simple ZIP-Based Service Discovery
                    </Styled.Title>

                    <Styled.Subtitle data-aos="fade-up" data-aos-delay="200">
                        The experience is designed to help users quickly
                        understand local service coverage before they proceed
                        with booking or support requests.
                    </Styled.Subtitle>
                </Styled.Header>

                <Styled.Grid>
                    {steps.map((step, index) => (
                        <Styled.Card
                            key={step.id}
                            className="glassCard"
                            data-aos="zoom-in"
                            data-aos-delay={index * 100}
                        >
                            <Styled.StepNumber>
                                Step {step.id}
                            </Styled.StepNumber>

                            <Styled.IconWrap>{step.icon}</Styled.IconWrap>

                            <Styled.CardTitle>{step.title}</Styled.CardTitle>

                            <Styled.CardText>
                                {step.description}
                            </Styled.CardText>
                        </Styled.Card>
                    ))}
                </Styled.Grid>
            </div>
        </Styled.Wrapper>
    );
};

export default HowItWorks;
