import { useEffect, useState } from "react";
import { FiArrowUp } from "react-icons/fi";

import { Styled } from "./styled";

const GoToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsVisible(window.scrollY > 320);
        };

        handleScroll();

        window.addEventListener("scroll", handleScroll, {
            passive: true,
        });

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleGoTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    if (!isVisible) {
        return null;
    }

    return (
        <Styled.Wrapper>
            <button
                type="button"
                onClick={handleGoTop}
                aria-label="Go to top"
                title="Go to top"
            >
                <FiArrowUp />
            </button>
        </Styled.Wrapper>
    );
};

export default GoToTop;
