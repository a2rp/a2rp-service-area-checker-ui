import styled from "styled-components";

export const Styled = {
    Wrapper: styled.section`
        position: relative;
        padding: 120px 24px;
        overflow: hidden;
        background: #080c0a;
        color: #f5f7f5;
        scroll-margin-top: 88px;

        .sectionGrid {
            position: absolute;
            inset: 0;
            opacity: 0.2;
            background-image:
                linear-gradient(rgba(255, 255, 255, 0.04) 1px, transparent 1px),
                linear-gradient(
                    90deg,
                    rgba(255, 255, 255, 0.04) 1px,
                    transparent 1px
                );
            background-size: 70px 70px;
            pointer-events: none;
        }

        .howInner {
            position: relative;
            z-index: 2;
            width: min(1440px, 100%);
            margin: 0 auto;
        }

        .sectionHeader {
            display: grid;
            grid-template-columns: minmax(0, 1fr) minmax(320px, 460px);
            gap: 70px;
            align-items: end;
        }

        .eyebrow {
            color: #76ff9d;
            font-family: "Antonio", sans-serif;
            font-size: 0.64rem;
            font-weight: 600;
            letter-spacing: 0.14em;
        }

        h2 {
            margin-top: 18px;
            font-family: "Antonio", sans-serif;
            font-size: clamp(3.8rem, 6vw, 7rem);
            font-weight: 700;
            line-height: 0.9;
            text-transform: uppercase;
            letter-spacing: -0.04em;
        }

        h2 span {
            display: block;
            color: #76ff9d;
        }

        .headerInfo {
            display: grid;
            gap: 18px;
        }

        .headerInfo p {
            color: #7f8a82;
            font-size: 0.9rem;
            line-height: 1.8;
        }

        .liveBadge {
            width: fit-content;
            min-height: 34px;
            padding: 0 11px;
            display: inline-flex;
            align-items: center;
            gap: 8px;
            border: 1px solid rgba(118, 255, 157, 0.18);
            border-radius: 999px;
            background: rgba(118, 255, 157, 0.06);
            color: #76ff9d;
            font-family: "Antonio", sans-serif;
            font-size: 0.58rem;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.1em;
        }

        .liveBadge i {
            width: 6px;
            height: 6px;
            border-radius: 50%;
            background: #76ff9d;
            box-shadow: 0 0 12px rgba(118, 255, 157, 0.6);
        }

        .processGrid {
            position: relative;
            margin-top: 70px;
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 14px;
        }

        .processCard {
            position: relative;
            min-height: 360px;
            padding: 24px;
            display: flex;
            flex-direction: column;
            border: 1px solid rgba(255, 255, 255, 0.08);
            border-radius: 22px;
            background: linear-gradient(
                145deg,
                rgba(255, 255, 255, 0.045),
                rgba(255, 255, 255, 0.015)
            );
            transition:
                transform 0.25s ease,
                border-color 0.25s ease,
                background 0.25s ease;
        }

        .processCard:hover {
            transform: translateY(-5px);
            border-color: rgba(118, 255, 157, 0.25);
            background: linear-gradient(
                145deg,
                rgba(118, 255, 157, 0.07),
                rgba(255, 255, 255, 0.015)
            );
        }

        .cardHeader {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 18px;
        }

        .stepNumber {
            color: #4f5a53;
            font-family: "Antonio", sans-serif;
            font-size: 0.62rem;
            font-weight: 600;
            letter-spacing: 0.15em;
        }

        .stepIcon {
            width: 46px;
            height: 46px;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 1px solid rgba(118, 255, 157, 0.18);
            border-radius: 50%;
            background: rgba(118, 255, 157, 0.06);
            color: #76ff9d;
        }

        .stepIcon svg {
            width: 17px;
            height: 17px;
        }

        .connector {
            position: relative;
            width: 100%;
            height: 1px;
            margin-top: 34px;
            background: rgba(255, 255, 255, 0.08);
        }

        .connector span {
            position: absolute;
            top: 50%;
            left: 0;
            width: 8px;
            height: 8px;
            border-radius: 50%;
            background: #76ff9d;
            transform: translateY(-50%);
            box-shadow: 0 0 14px rgba(118, 255, 157, 0.6);
        }

        .cardContent {
            margin-top: auto;
            padding-top: 52px;
        }

        .stepLabel {
            color: #76ff9d;
            font-family: "Antonio", sans-serif;
            font-size: 0.56rem;
            font-weight: 600;
            letter-spacing: 0.13em;
        }

        .cardContent h3 {
            margin-top: 10px;
            font-family: "Antonio", sans-serif;
            font-size: clamp(1.6rem, 2vw, 2.1rem);
            font-weight: 600;
            line-height: 1;
            text-transform: uppercase;
        }

        .cardContent p {
            margin-top: 14px;
            color: #7b867f;
            font-size: 0.76rem;
            line-height: 1.75;
        }

        .processFooter {
            margin-top: 16px;
            padding: 24px;
            display: grid;
            grid-template-columns: minmax(260px, 0.8fr) 1.2fr;
            gap: 40px;
            align-items: center;
            border: 1px solid rgba(255, 255, 255, 0.08);
            border-radius: 20px;
            background: rgba(255, 255, 255, 0.025);
        }

        .processStatus {
            display: flex;
            align-items: center;
            gap: 14px;
        }

        .statusIcon {
            flex: 0 0 auto;
            width: 44px;
            height: 44px;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 1px solid rgba(118, 255, 157, 0.18);
            border-radius: 50%;
            background: rgba(118, 255, 157, 0.06);
            color: #76ff9d;
        }

        .processStatus div {
            display: grid;
            gap: 4px;
        }

        .processStatus div > span {
            color: #5f6a63;
            font-family: "Antonio", sans-serif;
            font-size: 0.54rem;
            font-weight: 600;
            letter-spacing: 0.13em;
        }

        .processStatus strong {
            font-family: "Antonio", sans-serif;
            font-size: 0.9rem;
            font-weight: 600;
            text-transform: uppercase;
        }

        .processMeta {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 10px;
        }

        .processMeta span {
            min-height: 68px;
            padding: 12px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            border-left: 1px solid rgba(255, 255, 255, 0.08);
            color: #647068;
            font-size: 0.6rem;
        }

        .processMeta strong {
            margin-bottom: 5px;
            color: #76ff9d;
            font-family: "Antonio", sans-serif;
            font-size: 0.58rem;
            font-weight: 600;
            letter-spacing: 0.1em;
        }

        @media (max-width: 1100px) {
            .processGrid {
                grid-template-columns: repeat(2, 1fr);
            }

            .processFooter {
                grid-template-columns: 1fr;
            }
        }

        @media (max-width: 800px) {
            .sectionHeader {
                grid-template-columns: 1fr;
                gap: 28px;
            }
        }

        @media (max-width: 700px) {
            padding: 90px 18px;

            .processGrid {
                grid-template-columns: 1fr;
                margin-top: 48px;
            }

            .processCard {
                min-height: 310px;
            }

            .processFooter {
                padding: 20px;
            }

            .processMeta {
                grid-template-columns: repeat(2, 1fr);
            }
        }

        @media (max-width: 440px) {
            .processMeta {
                grid-template-columns: 1fr;
            }

            .processMeta span {
                border-left: 0;
                border-bottom: 1px solid rgba(255, 255, 255, 0.08);
            }

            .processMeta span:last-child {
                border-bottom: 0;
            }
        }
    `,
};
