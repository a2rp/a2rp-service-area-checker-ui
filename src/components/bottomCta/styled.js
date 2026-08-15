import styled from "styled-components";

export const Styled = {
    Wrapper: styled.section`
        position: relative;
        padding: 120px 24px;
        overflow: hidden;
        background: #0d2d1b;
        color: #f6f8f6;

        .ctaGrid {
            position: absolute;
            inset: 0;
            opacity: 0.16;
            background-image:
                linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
                linear-gradient(
                    90deg,
                    rgba(255, 255, 255, 0.05) 1px,
                    transparent 1px
                );
            background-size: 68px 68px;
            pointer-events: none;
        }

        &::before {
            content: "";
            position: absolute;
            top: -120px;
            right: -80px;
            width: 420px;
            height: 420px;
            border-radius: 50%;
            background: rgba(118, 255, 157, 0.1);
            filter: blur(120px);
            pointer-events: none;
        }

        .ctaInner {
            position: relative;
            z-index: 2;
            width: min(1440px, 100%);
            margin: 0 auto;
            display: grid;
            grid-template-columns: minmax(0, 1fr) minmax(360px, 0.72fr);
            gap: clamp(50px, 8vw, 120px);
            align-items: center;
        }

        .ctaContent {
            max-width: 820px;
        }

        .eyebrow {
            color: #76ff9d;
            font-family: "Antonio", sans-serif;
            font-size: 0.62rem;
            font-weight: 600;
            letter-spacing: 0.14em;
        }

        h2 {
            margin-top: 18px;
            font-family: "Antonio", sans-serif;
            font-size: clamp(4rem, 6.5vw, 7.4rem);
            font-weight: 700;
            line-height: 0.89;
            text-transform: uppercase;
            letter-spacing: -0.04em;
        }

        h2 span {
            display: block;
            color: #76ff9d;
        }

        .ctaContent > p {
            max-width: 620px;
            margin-top: 26px;
            color: #a0ada4;
            font-size: 0.9rem;
            line-height: 1.8;
        }

        .ctaActions {
            margin-top: 34px;
            display: flex;
            flex-wrap: wrap;
            gap: 12px;
        }

        .ctaActions button,
        .ctaActions a {
            min-height: 54px;
            padding: 0 20px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
            border-radius: 999px;
            font-family: "Antonio", sans-serif;
            font-size: 0.72rem;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.1em;
            cursor: pointer;
            transition:
                transform 0.2s ease,
                background 0.2s ease,
                border-color 0.2s ease;
        }

        .ctaActions button:hover,
        .ctaActions a:hover {
            transform: translateY(-2px);
        }

        .primaryAction {
            border: 1px solid #76ff9d;
            background: #76ff9d;
            color: #08100b;
        }

        .primaryAction:hover {
            border-color: #96ffb5;
            background: #96ffb5;
        }

        .secondaryAction {
            border: 1px solid rgba(255, 255, 255, 0.16);
            background: transparent;
            color: #f6f8f6;
        }

        .secondaryAction:hover {
            border-color: rgba(118, 255, 157, 0.4);
            background: rgba(118, 255, 157, 0.06);
        }

        .ctaPanel {
            padding: 28px;
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 26px;
            background: linear-gradient(
                145deg,
                rgba(255, 255, 255, 0.055),
                rgba(255, 255, 255, 0.015)
            );
            box-shadow: 0 30px 70px rgba(0, 0, 0, 0.18);
        }

        .panelIcon {
            width: 56px;
            height: 56px;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 1px solid rgba(118, 255, 157, 0.2);
            border-radius: 50%;
            background: rgba(118, 255, 157, 0.07);
            color: #76ff9d;
        }

        .panelIcon svg {
            width: 21px;
            height: 21px;
        }

        .panelContent {
            margin-top: 40px;
        }

        .panelContent > span {
            color: #728078;
            font-family: "Antonio", sans-serif;
            font-size: 0.56rem;
            font-weight: 600;
            letter-spacing: 0.13em;
        }

        .panelContent strong {
            display: block;
            margin-top: 10px;
            font-family: "Antonio", sans-serif;
            font-size: clamp(2rem, 3vw, 3.1rem);
            font-weight: 600;
            line-height: 0.98;
            text-transform: uppercase;
        }

        .panelContent p {
            margin-top: 16px;
            color: #859188;
            font-size: 0.76rem;
            line-height: 1.7;
        }

        .panelFooter {
            margin-top: 34px;
            padding-top: 18px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 14px;
            border-top: 1px solid rgba(255, 255, 255, 0.08);
            color: #748178;
            font-size: 0.6rem;
        }

        .panelFooter span:first-child {
            display: inline-flex;
            align-items: center;
            gap: 7px;
            color: #8e9b92;
        }

        .panelFooter i {
            width: 6px;
            height: 6px;
            border-radius: 50%;
            background: #76ff9d;
            box-shadow: 0 0 12px rgba(118, 255, 157, 0.55);
        }

        @media (max-width: 1000px) {
            .ctaInner {
                grid-template-columns: 1fr;
            }

            .ctaPanel {
                max-width: 620px;
            }
        }

        @media (max-width: 700px) {
            padding: 90px 18px;

            .ctaActions {
                flex-direction: column;
            }

            .ctaActions button,
            .ctaActions a {
                width: 100%;
            }

            .ctaPanel {
                padding: 22px;
                border-radius: 22px;
            }
        }
    `,
};
