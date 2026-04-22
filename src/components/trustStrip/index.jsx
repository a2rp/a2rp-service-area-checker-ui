import React from "react";
import { Styled } from "./styled";

const TrustStrip = () => {
    return (
        <Styled.Wrapper className="sectionSpace">
            <div className="container">
                <Styled.Card
                    className="glassCard"
                    data-aos="fade-up"
                    data-aos-delay="100"
                >
                    <Styled.Content>
                        <Styled.Eyebrow>
                            Built for Regional Operations
                        </Styled.Eyebrow>

                        <Styled.Title>
                            Built for Fast Regional Service Discovery
                        </Styled.Title>

                        <Styled.Text>
                            Customers can quickly check whether their area is
                            covered before booking. This reduces confusion,
                            improves lead quality, and helps service teams route
                            requests more efficiently.
                        </Styled.Text>
                    </Styled.Content>

                    <Styled.Stats>
                        <Styled.StatItem>
                            <Styled.StatValue>ZIP Based</Styled.StatValue>
                            <Styled.StatLabel>
                                Coverage matching
                            </Styled.StatLabel>
                        </Styled.StatItem>

                        <Styled.StatItem>
                            <Styled.StatValue>Branch Aware</Styled.StatValue>
                            <Styled.StatLabel>
                                Nearest hub logic
                            </Styled.StatLabel>
                        </Styled.StatItem>

                        <Styled.StatItem>
                            <Styled.StatValue>Service Smart</Styled.StatValue>
                            <Styled.StatLabel>
                                Availability by region
                            </Styled.StatLabel>
                        </Styled.StatItem>
                    </Styled.Stats>
                </Styled.Card>
            </div>
        </Styled.Wrapper>
    );
};

export default TrustStrip;
