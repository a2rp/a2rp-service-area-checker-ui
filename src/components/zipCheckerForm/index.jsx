import React from "react";
import { Styled } from "./styled";

const sampleZips = ["560048", "560066", "560001", "560063"];

const ZipCheckerForm = ({ zipCode, setZipCode, handleCheckZip, error }) => {
    const handleSubmit = (event) => {
        event.preventDefault();
        handleCheckZip();
    };

    const handleSampleZipClick = (sampleZip) => {
        setZipCode(sampleZip);
    };

    return (
        <Styled.Wrapper>
            <div className="container">
                <Styled.Card
                    className="glassCard"
                    data-aos="zoom-in"
                    data-aos-delay="150"
                >
                    <Styled.Header>
                        <Styled.Eyebrow>Service Area Checker</Styled.Eyebrow>
                        <Styled.Title>
                            Find Services Available in Your ZIP Code
                        </Styled.Title>
                        <Styled.Subtitle>
                            Enter a valid ZIP code to check coverage, service
                            availability, nearest hub, and response estimates
                            for your area.
                        </Styled.Subtitle>
                    </Styled.Header>

                    <Styled.Form onSubmit={handleSubmit}>
                        <Styled.InputWrap>
                            <Styled.Input
                                type="text"
                                inputMode="numeric"
                                maxLength={6}
                                placeholder="Enter ZIP code"
                                value={zipCode}
                                onChange={(event) => {
                                    const value = event.target.value
                                        .replace(/\D/g, "")
                                        .slice(0, 6);
                                    setZipCode(value);
                                }}
                            />
                        </Styled.InputWrap>

                        <Styled.Button type="submit">
                            Check Availability
                        </Styled.Button>
                    </Styled.Form>

                    {error ? (
                        <Styled.ErrorText>{error}</Styled.ErrorText>
                    ) : null}

                    <Styled.HelperText>
                        Coverage is matched using regional service rules, branch
                        reach, and active dispatch zones.
                    </Styled.HelperText>

                    <Styled.Chips>
                        {sampleZips.map((sampleZip, index) => (
                            <Styled.Chip
                                type="button"
                                key={sampleZip}
                                onClick={() => handleSampleZipClick(sampleZip)}
                                data-aos="fade-up"
                                data-aos-delay={index * 100}
                            >
                                {sampleZip}
                            </Styled.Chip>
                        ))}
                    </Styled.Chips>
                </Styled.Card>
            </div>
        </Styled.Wrapper>
    );
};

export default ZipCheckerForm;
