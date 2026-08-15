import styled from "styled-components";

export const Styled = {
    Wrapper: styled.section`
        position: relative;
        padding: 120px 24px;
        overflow: hidden;
        background: #0a100c;
        color: #f5f7f5;
        scroll-margin-top: 88px;

        &::before {
            content: "";
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
            background-size: 68px 68px;
            pointer-events: none;
        }

        .servicesInner {
            position: relative;
            z-index: 2;
            width: min(1440px, 100%);
            margin: 0 auto;
        }

        .sectionHeader {
            display: grid;
            grid-template-columns: minmax(0, 1fr) minmax(300px, 500px);
            gap: 60px;
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

        .sectionHeader > p {
            color: #818c84;
            font-size: 0.9rem;
            line-height: 1.8;
        }

        .servicesList {
            margin-top: 64px;
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 14px;
        }

        .serviceCard {
            position: relative;
            min-height: 330px;
            padding: 24px;
            display: flex;
            flex-direction: column;
            overflow: hidden;
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

        .serviceCard:hover {
            transform: translateY(-5px);
            border-color: rgba(118, 255, 157, 0.25);
            background: linear-gradient(
                145deg,
                rgba(118, 255, 157, 0.07),
                rgba(255, 255, 255, 0.015)
            );
        }

        .serviceCard::after {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 3px;
            height: 100%;
            background: #76ff9d;
        }

        .serviceCard.limited::after {
            background: #f0bf48;
        }

        .serviceCard.unavailable::after {
            background: #de6868;
        }

        .cardTop {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 16px;
        }

        .serviceNumber {
            color: #4f5a53;
            font-family: "Antonio", sans-serif;
            font-size: 0.6rem;
            font-weight: 600;
            letter-spacing: 0.15em;
        }

        .serviceStatus {
            display: inline-flex;
            align-items: center;
            gap: 7px;
            color: #76ff9d;
            font-family: "Antonio", sans-serif;
            font-size: 0.57rem;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.1em;
        }

        .serviceStatus i {
            width: 6px;
            height: 6px;
            border-radius: 50%;
            background: currentColor;
            box-shadow: 0 0 10px currentColor;
        }

        .limited .serviceStatus {
            color: #f0bf48;
        }

        .unavailable .serviceStatus {
            color: #de6868;
        }

        .serviceIcon {
            width: 52px;
            height: 52px;
            margin-top: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 1px solid rgba(118, 255, 157, 0.18);
            border-radius: 50%;
            background: rgba(118, 255, 157, 0.07);
            color: #76ff9d;
        }

        .limited .serviceIcon {
            border-color: rgba(240, 191, 72, 0.2);
            background: rgba(240, 191, 72, 0.07);
            color: #f0bf48;
        }

        .unavailable .serviceIcon {
            border-color: rgba(222, 104, 104, 0.2);
            background: rgba(222, 104, 104, 0.07);
            color: #de6868;
        }

        .serviceIcon svg {
            width: 20px;
            height: 20px;
        }

        .serviceCard h3 {
            margin-top: 24px;
            font-family: "Antonio", sans-serif;
            font-size: 1.8rem;
            font-weight: 600;
            line-height: 1;
            text-transform: uppercase;
        }

        .serviceCard p {
            margin-top: 13px;
            color: #7f8982;
            font-size: 0.78rem;
            line-height: 1.7;
        }

        .cardFooter {
            margin-top: auto;
            padding-top: 20px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 12px;
            border-top: 1px solid rgba(255, 255, 255, 0.07);
            color: #657068;
            font-size: 0.62rem;
        }

        .cardFooter svg {
            color: #76ff9d;
        }

        .limited .cardFooter svg {
            color: #f0bf48;
        }

        .unavailable .cardFooter svg {
            color: #de6868;
        }

        .emptyState {
            margin-top: 60px;
            padding: 38px;
            display: grid;
            grid-template-columns: auto 1fr;
            gap: 24px;
            align-items: center;
            border: 1px solid rgba(255, 255, 255, 0.08);
            border-radius: 24px;
            background: rgba(255, 255, 255, 0.025);
        }

        .emptyIcon {
            width: 62px;
            height: 62px;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 1px solid rgba(222, 104, 104, 0.2);
            border-radius: 50%;
            background: rgba(222, 104, 104, 0.07);
            color: #de6868;
        }

        .emptyState span {
            color: #de6868;
            font-family: "Antonio", sans-serif;
            font-size: 0.6rem;
            font-weight: 600;
            letter-spacing: 0.14em;
        }

        .emptyState h3 {
            margin-top: 7px;
            font-family: "Antonio", sans-serif;
            font-size: 1.8rem;
            font-weight: 600;
            text-transform: uppercase;
        }

        .emptyState p {
            max-width: 700px;
            margin-top: 8px;
            color: #7d8780;
            font-size: 0.78rem;
            line-height: 1.7;
        }

        @media (max-width: 1150px) {
            .servicesList {
                grid-template-columns: repeat(2, 1fr);
            }
        }

        @media (max-width: 800px) {
            .sectionHeader {
                grid-template-columns: 1fr;
                gap: 24px;
            }
        }

        @media (max-width: 700px) {
            padding: 90px 18px;

            .servicesList {
                grid-template-columns: 1fr;
            }

            .serviceCard {
                min-height: 290px;
            }

            .emptyState {
                grid-template-columns: 1fr;
                padding: 26px;
            }
        }
    `,
};
