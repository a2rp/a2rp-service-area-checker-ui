import { useEffect } from "react";

const IframeAutoScrollReceiver = () => {
    useEffect(() => {
        let animationFrameId = null;
        let direction = 1;
        let speed = 0.6;
        let isRunning = false;

        const scrollPage = () => {
            if (!isRunning) return;

            const maxScrollTop =
                document.documentElement.scrollHeight - window.innerHeight;

            if (window.scrollY >= maxScrollTop - 2) {
                direction = -1;
            }

            if (window.scrollY <= 0) {
                direction = 1;
            }

            window.scrollBy({
                top: direction * speed,
                behavior: "auto",
            });

            animationFrameId = requestAnimationFrame(scrollPage);
        };

        const handleMessage = (event) => {
            const data = event.data;

            if (!data || data.source !== "a2rp-auto-scroll") return;

            if (data.type === "START_SCROLL") {
                speed = data.speed || 0.6;
                isRunning = true;

                if (animationFrameId) {
                    cancelAnimationFrame(animationFrameId);
                }

                animationFrameId = requestAnimationFrame(scrollPage);
            }

            if (data.type === "STOP_SCROLL") {
                isRunning = false;

                if (animationFrameId) {
                    cancelAnimationFrame(animationFrameId);
                }
            }
        };

        window.addEventListener("message", handleMessage);

        return () => {
            window.removeEventListener("message", handleMessage);

            if (animationFrameId) {
                cancelAnimationFrame(animationFrameId);
            }
        };
    }, []);

    return null;
};

export default IframeAutoScrollReceiver;
