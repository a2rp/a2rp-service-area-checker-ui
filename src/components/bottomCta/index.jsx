import React from "react";
import { Styled } from "./styled";

const BottomCta = ({ handleReset }) => {
    return (
        <Styled.Wrapper className="sectionSpace">
            <div className="container">
                <Styled.Card
                    className="glassCard"
                    data-aos="fade-up"
                    data-aos-delay="100"
                >
                    <Styled.Content>
                        <Styled.Eyebrow>Next Step</Styled.Eyebrow>

                        <Styled.Title>
                            Need Help Choosing the Right Service?
                        </Styled.Title>

                        <Styled.Text>
                            Check your ZIP code, review available services, and
                            connect with the nearest support team for faster
                            scheduling and better service routing.
                        </Styled.Text>
                    </Styled.Content>

                    <Styled.Actions>
                        <Styled.PrimaryButton
                            type="button"
                            onClick={handleReset}
                        >
                            Check Another ZIP
                        </Styled.PrimaryButton>

                        <Styled.SecondaryButton type="button">
                            Request Callback
                        </Styled.SecondaryButton>
                    </Styled.Actions>
                </Styled.Card>
            </div>
        </Styled.Wrapper>
    );
};

export default BottomCta;
