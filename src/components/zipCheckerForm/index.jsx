import {
    FiArrowRight,
    FiCheckCircle,
    FiCrosshair,
    FiInfo,
    FiMapPin,
    FiSearch,
} from "react-icons/fi";

import { Styled } from "./styled";

const sampleZips = ["110001", "400001", "560001", "700001"];

const ZipCheckerForm = ({ zipCode, setZipCode, handleCheckZip, error }) => {
    const handleSubmit = (event) => {
        event.preventDefault();
        handleCheckZip();
    };

    const handleSampleZip = (zip) => {
        setZipCode(zip);
    };

    return (
        <Styled.Wrapper className="zipCheckerForm">
            <div className="checkerInner">
                <div className="checkerIntro">
                    <div className="sectionLabel">
                        <span className="labelIcon">
                            <FiCrosshair />
                        </span>

                        <span>01 / Availability Checker</span>
                    </div>

                    <h2>
                        Check service
                        <span>availability.</span>
                    </h2>

                    <p>
                        Enter your 6-digit ZIP code to see whether our service
                        network is available in your area and which services can
                        be scheduled.
                    </p>

                    <div className="introPoints">
                        <span>
                            <FiCheckCircle />
                            Instant coverage status
                        </span>

                        <span>
                            <FiCheckCircle />
                            Service-by-service availability
                        </span>

                        <span>
                            <FiCheckCircle />
                            No account required
                        </span>
                    </div>
                </div>

                <div className="checkerCard">
                    <div className="cardTop">
                        <div>
                            <span className="cardEyebrow">LOCATION SEARCH</span>

                            <h3>Enter your ZIP code</h3>
                        </div>

                        <span className="secureBadge">
                            <FiMapPin />
                            Coverage
                        </span>
                    </div>

                    <form onSubmit={handleSubmit}>
                        <label htmlFor="serviceZip">ZIP CODE</label>

                        <div
                            className={`inputShell ${error ? "hasError" : ""}`}
                        >
                            <span className="inputIcon">
                                <FiSearch />
                            </span>

                            <input
                                id="serviceZip"
                                type="text"
                                inputMode="numeric"
                                autoComplete="postal-code"
                                placeholder="Enter 6-digit ZIP code"
                                value={zipCode}
                                maxLength={6}
                                onChange={(event) => {
                                    const value = event.target.value
                                        .replace(/\D/g, "")
                                        .slice(0, 6);

                                    setZipCode(value);
                                }}
                            />

                            <span className="digitCount">
                                {zipCode.length}/6
                            </span>
                        </div>

                        {error && (
                            <div className="errorMessage" role="alert">
                                <FiInfo />
                                <span>{error}</span>
                            </div>
                        )}

                        <button className="submitButton" type="submit">
                            Check availability
                            <FiArrowRight />
                        </button>
                    </form>

                    <div className="sampleSection">
                        <div className="sampleHeading">
                            <span>TRY A SAMPLE ZIP</span>
                            <span className="divider" />
                        </div>

                        <div className="sampleList">
                            {sampleZips.map((zip) => (
                                <button
                                    key={zip}
                                    type="button"
                                    onClick={() => handleSampleZip(zip)}
                                    className={zipCode === zip ? "active" : ""}
                                >
                                    <FiMapPin />
                                    {zip}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="cardFooter">
                        <span className="statusIndicator">
                            <i />
                            Search service operational
                        </span>

                        <span>6-digit ZIP required</span>
                    </div>
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default ZipCheckerForm;
