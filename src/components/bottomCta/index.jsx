import { FiArrowUpRight, FiMapPin, FiRefreshCw } from "react-icons/fi";

import { Styled } from "./styled";

const BottomCta = ({ handleReset }) => {
    return (
        <Styled.Wrapper className="bottomCta">
            <div className="ctaGrid" />

            <div className="ctaInner">
                <div className="ctaContent">
                    <span className="eyebrow">READY TO CHECK AGAIN?</span>

                    <h2>
                        Find service
                        <span>availability fast.</span>
                    </h2>

                    <p>
                        Run another ZIP lookup to compare coverage areas,
                        regional hubs, service status, and local operational
                        availability.
                    </p>

                    <div className="ctaActions">
                        <button
                            className="primaryAction"
                            type="button"
                            onClick={handleReset}
                        >
                            <FiRefreshCw />
                            Check another ZIP
                        </button>

                        <a
                            className="secondaryAction"
                            href="https://github.com/a2rp/service-area-checker-ui"
                            target="_blank"
                            rel="noreferrer"
                        >
                            View repository
                            <FiArrowUpRight />
                        </a>
                    </div>
                </div>

                <div className="ctaPanel">
                    <div className="panelIcon">
                        <FiMapPin />
                    </div>

                    <div className="panelContent">
                        <span>LOCATION LOOKUP</span>

                        <strong>
                            One ZIP code.
                            <br />
                            Clear coverage.
                        </strong>

                        <p>
                            No account required. Just enter a valid ZIP code and
                            review the available service network.
                        </p>
                    </div>

                    <div className="panelFooter">
                        <span>
                            <i />
                            Checker ready
                        </span>

                        <span>6-digit ZIP</span>
                    </div>
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default BottomCta;
