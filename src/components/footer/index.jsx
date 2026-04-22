import React from "react";
import { Styled } from "./styled";

const Footer = () => {
    const buildTime =
        typeof __BUILD_TIME__ !== "undefined" ? new Date(__BUILD_TIME__) : null;

    return (
        <Styled.Wrapper>
            <div className="container">
                <Styled.Inner>
                    <Styled.Left>
                        <span className="label">Last updated:</span>
                        <span
                            className="value"
                            title={buildTime ? buildTime.toISOString() : ""}
                        >
                            {buildTime
                                ? buildTime.toLocaleString("en-IN", {
                                      dateStyle: "medium",
                                      timeStyle: "short",
                                      timeZone: "Asia/Kolkata",
                                  })
                                : "Not available"}
                        </span>
                    </Styled.Left>

                    <Styled.Right>
                        <span className="label">Developed by</span>
                        <a
                            href="https://www.ashishranjan.net"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="Open Ashish Ranjan portfolio"
                            title="Ashish Ranjan"
                        >
                            Ashish Ranjan
                        </a>
                    </Styled.Right>
                </Styled.Inner>
            </div>
        </Styled.Wrapper>
    );
};

export default Footer;
