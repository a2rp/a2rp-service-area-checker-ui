import React, { useEffect, useMemo, useRef, useState } from "react";
import AOS from "aos";

import BottomCta from "./components/bottomCta";
import CoverageDetails from "./components/coverageDetails";
import HeroSection from "./components/heroSection";
import HowItWorks from "./components/howItWorks";
import ResultSummary from "./components/resultSummary";
import ServicesGrid from "./components/servicesGrid";
import TrustStrip from "./components/trustStrip";
import ZipCheckerForm from "./components/zipCheckerForm";
import { findRegionByZip } from "./utils/findRegionByZip";
import Footer from "./components/footer";
import IframeAutoScrollReceiver from "./components/IframeAutoScrollReceiver";

const App = () => {
    const [zipCode, setZipCode] = useState("");
    const [submittedZip, setSubmittedZip] = useState("");
    const [matchedRegion, setMatchedRegion] = useState(null);
    const [hasSearched, setHasSearched] = useState(false);
    const [error, setError] = useState("");
    const summaryRef = useRef(null);

    const normalizedZip = useMemo(() => {
        return zipCode.replace(/\D/g, "").slice(0, 6);
    }, [zipCode]);

    const handleCheckZip = () => {
        const cleanZip = normalizedZip.trim();

        if (!cleanZip) {
            setError("Please enter a ZIP code.");
            setHasSearched(false);
            setMatchedRegion(null);
            setSubmittedZip("");
            return;
        }

        if (!/^\d{6}$/.test(cleanZip)) {
            setError("Please enter a valid 6-digit ZIP code.");
            setHasSearched(false);
            setMatchedRegion(null);
            setSubmittedZip("");
            return;
        }

        const region = findRegionByZip(cleanZip);

        setError("");
        setSubmittedZip(cleanZip);
        setMatchedRegion(region);
        setHasSearched(true);
        setZipCode(cleanZip);

        setTimeout(() => {
            summaryRef.current?.scrollIntoView({
                behavior: "smooth",
                block: "center",
            });
        }, 50);
    };

    const handleReset = () => {
        setZipCode("");
        setSubmittedZip("");
        setMatchedRegion(null);
        setHasSearched(false);
        setError("");
    };

    // useEffect(() => {
    //     if (hasSearched && summaryRef.current) {
    //         summaryRef.current.scrollIntoView({
    //             behavior: "smooth",
    //             block: "center",
    //         });
    //     }
    // }, [submittedZip, matchedRegion]);

    useEffect(() => {
        AOS.refresh();
        AOS.refreshHard();
    }, [submittedZip]);

    return (
        <>
            <IframeAutoScrollReceiver />

            <HeroSection />

            <ZipCheckerForm
                zipCode={zipCode}
                setZipCode={setZipCode}
                handleCheckZip={handleCheckZip}
                error={error}
            />

            <div ref={summaryRef}>
                <ResultSummary
                    submittedZip={submittedZip}
                    matchedRegion={matchedRegion}
                    hasSearched={hasSearched}
                />
            </div>

            <ServicesGrid
                matchedRegion={matchedRegion}
                hasSearched={hasSearched}
            />

            <CoverageDetails
                matchedRegion={matchedRegion}
                hasSearched={hasSearched}
            />

            <HowItWorks />

            <TrustStrip />

            <BottomCta handleReset={handleReset} />

            <Footer />
        </>
    );
};

export default App;
