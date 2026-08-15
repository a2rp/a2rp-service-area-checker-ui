import styled from "styled-components";

export const Styled = {
    Wrapper: styled.section`
        position: relative;
        min-height: calc(100vh - 88px);
        padding: 80px 24px 28px;
        overflow: hidden;
        background: #080c0a;
        color: #f6f8f6;

        .heroGrid {
            position: absolute;
            inset: 0;
            opacity: 0.18;
            background-image:
                linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
                linear-gradient(
                    90deg,
                    rgba(255, 255, 255, 0.05) 1px,
                    transparent 1px
                );
            background-size: 72px 72px;
            pointer-events: none;
        }

        .heroGlow {
            position: absolute;
            border-radius: 50%;
            filter: blur(120px);
            pointer-events: none;
        }

        .heroGlowOne {
            top: -120px;
            right: 8%;
            width: 380px;
            height: 380px;
            background: rgba(118, 255, 157, 0.13);
        }

        .heroGlowTwo {
            left: -140px;
            bottom: -120px;
            width: 360px;
            height: 360px;
            background: rgba(52, 196, 114, 0.08);
        }

        .heroInner {
            position: relative;
            z-index: 2;
            width: min(1440px, 100%);
            margin: 0 auto;
            display: grid;
            grid-template-columns: minmax(0, 1.08fr) minmax(420px, 0.92fr);
            gap: clamp(50px, 7vw, 110px);
            align-items: center;
        }

        .heroContent {
            max-width: 820px;
        }

        .eyebrow {
            width: fit-content;
            min-height: 34px;
            padding: 0 12px;
            display: inline-flex;
            align-items: center;
            gap: 9px;
            border: 1px solid rgba(118, 255, 157, 0.22);
            border-radius: 999px;
            background: rgba(118, 255, 157, 0.06);
            color: #a8b4ac;
            font-family: "Antonio", sans-serif;
            font-size: 0.68rem;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.15em;
        }

        .statusDot {
            position: relative;
            width: 7px;
            height: 7px;
            border-radius: 50%;
            background: #76ff9d;
            box-shadow: 0 0 18px rgba(118, 255, 157, 0.8);
        }

        .statusDot::after {
            content: "";
            position: absolute;
            inset: -5px;
            border: 1px solid rgba(118, 255, 157, 0.25);
            border-radius: 50%;
        }

        h1 {
            max-width: 900px;
            margin-top: 28px;
            font-family: "Antonio", sans-serif;
            font-size: clamp(4.2rem, 7vw, 8rem);
            font-weight: 700;
            line-height: 0.88;
            text-transform: uppercase;
            letter-spacing: -0.045em;
        }

        h1 span {
            display: block;
            color: #76ff9d;
        }

        .heroDescription {
            max-width: 660px;
            margin-top: 28px;
            color: #97a39c;
            font-size: 0.96rem;
            line-height: 1.85;
        }

        .heroActions {
            margin-top: 34px;
            display: flex;
            flex-wrap: wrap;
            gap: 12px;
        }

        .heroActions button {
            min-height: 54px;
            padding: 0 20px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
            border-radius: 999px;
            font-family: "Antonio", sans-serif;
            font-size: 0.76rem;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.1em;
            cursor: pointer;
            transition:
                transform 0.2s ease,
                background 0.2s ease,
                border-color 0.2s ease;
        }

        .heroActions button:hover {
            transform: translateY(-2px);
        }

        .primaryAction {
            border: 1px solid #76ff9d;
            background: #76ff9d;
            color: #08100b;
        }

        .primaryAction:hover {
            background: #94ffb3;
            border-color: #94ffb3;
        }

        .secondaryAction {
            border: 1px solid rgba(255, 255, 255, 0.13);
            background: transparent;
            color: #f6f8f6;
        }

        .secondaryAction:hover {
            border-color: rgba(118, 255, 157, 0.4);
            background: rgba(118, 255, 157, 0.06);
        }

        .trustRow {
            margin-top: 32px;
            display: flex;
            flex-wrap: wrap;
            gap: 12px 24px;
        }

        .trustRow span {
            display: inline-flex;
            align-items: center;
            gap: 7px;
            color: #77827b;
            font-size: 0.72rem;
        }

        .trustRow svg {
            color: #76ff9d;
        }

        .heroPanel {
            position: relative;
            padding: 22px;
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 28px;
            background: linear-gradient(
                145deg,
                rgba(255, 255, 255, 0.055),
                rgba(255, 255, 255, 0.018)
            );
            box-shadow: 0 30px 80px rgba(0, 0, 0, 0.36);
            backdrop-filter: blur(18px);
        }

        .panelHeader {
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
            gap: 20px;
        }

        .panelHeader > div {
            display: grid;
            gap: 5px;
        }

        .panelHeader span {
            color: #6f7973;
            font-family: "Antonio", sans-serif;
            font-size: 0.58rem;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.14em;
        }

        .panelHeader strong {
            font-family: "Antonio", sans-serif;
            font-size: 1.7rem;
            font-weight: 600;
            text-transform: uppercase;
        }

        .liveStatus {
            min-height: 30px;
            padding: 0 10px;
            display: inline-flex;
            align-items: center;
            gap: 7px;
            border: 1px solid rgba(118, 255, 157, 0.18);
            border-radius: 999px;
            color: #76ff9d !important;
            background: rgba(118, 255, 157, 0.06);
        }

        .liveStatus i {
            width: 6px;
            height: 6px;
            border-radius: 50%;
            background: #76ff9d;
            box-shadow: 0 0 10px rgba(118, 255, 157, 0.7);
        }

        .mapPreview {
            position: relative;
            height: 310px;
            margin-top: 22px;
            overflow: hidden;
            border: 1px solid rgba(255, 255, 255, 0.07);
            border-radius: 20px;
            background:
                radial-gradient(
                    circle at center,
                    rgba(118, 255, 157, 0.1),
                    transparent 48%
                ),
                #0b110e;
        }

        .mapGrid {
            position: absolute;
            inset: 0;
            opacity: 0.38;
            background-image:
                linear-gradient(rgba(118, 255, 157, 0.1) 1px, transparent 1px),
                linear-gradient(
                    90deg,
                    rgba(118, 255, 157, 0.1) 1px,
                    transparent 1px
                );
            background-size: 38px 38px;
        }

        .mapCenter {
            position: absolute;
            top: 50%;
            left: 50%;
            width: 72px;
            height: 72px;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 1px solid rgba(118, 255, 157, 0.3);
            border-radius: 50%;
            background: rgba(118, 255, 157, 0.08);
            color: #76ff9d;
            transform: translate(-50%, -50%);
            box-shadow:
                0 0 0 16px rgba(118, 255, 157, 0.025),
                0 0 0 34px rgba(118, 255, 157, 0.018);
        }

        .mapCenter svg {
            width: 25px;
            height: 25px;
        }

        .mapPoint {
            position: absolute;
            z-index: 2;
            display: inline-flex;
            align-items: center;
            gap: 6px;
            color: #87938b;
            font-family: "Antonio", sans-serif;
            font-size: 0.58rem;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.12em;
        }

        .mapPoint i {
            width: 7px;
            height: 7px;
            border-radius: 50%;
            background: #76ff9d;
            box-shadow: 0 0 12px rgba(118, 255, 157, 0.6);
        }

        .pointOne {
            top: 22%;
            left: 20%;
        }

        .pointTwo {
            top: 34%;
            right: 14%;
        }

        .pointThree {
            left: 27%;
            bottom: 18%;
        }

        .panelStats {
            margin-top: 16px;
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 10px;
        }

        .panelStats article {
            min-height: 118px;
            padding: 15px;
            display: flex;
            flex-direction: column;
            border: 1px solid rgba(255, 255, 255, 0.07);
            border-radius: 16px;
            background: rgba(255, 255, 255, 0.025);
        }

        .panelStats article > span {
            color: #59645d;
            font-family: "Antonio", sans-serif;
            font-size: 0.56rem;
            font-weight: 600;
            letter-spacing: 0.12em;
        }

        .panelStats strong {
            margin-top: auto;
            display: flex;
            align-items: center;
            gap: 7px;
            color: #f6f8f6;
            font-family: "Antonio", sans-serif;
            font-size: 1.65rem;
            font-weight: 600;
            text-transform: uppercase;
        }

        .panelStats strong svg {
            color: #76ff9d;
        }

        .panelStats p {
            margin-top: 3px;
            color: #707b74;
            font-size: 0.68rem;
        }

        .heroFooter {
            position: relative;
            z-index: 2;
            width: min(1440px, 100%);
            margin: 55px auto 0;
            padding-top: 20px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            border-top: 1px solid rgba(255, 255, 255, 0.08);
            color: #566159;
            font-family: "Antonio", sans-serif;
            font-size: 0.58rem;
            font-weight: 600;
            letter-spacing: 0.13em;
        }

        .heroFooter button {
            width: 40px;
            height: 40px;
            padding: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 50%;
            background: transparent;
            color: #76ff9d;
            cursor: pointer;
            transition:
                transform 0.2s ease,
                border-color 0.2s ease;
        }

        .heroFooter button:hover {
            transform: translateY(3px);
            border-color: rgba(118, 255, 157, 0.4);
        }

        @media (max-width: 1050px) {
            min-height: auto;

            .heroInner {
                grid-template-columns: 1fr;
            }

            .heroContent {
                max-width: 900px;
            }

            .heroPanel {
                max-width: 720px;
            }
        }

        @media (max-width: 700px) {
            padding: 60px 18px 24px;

            h1 {
                font-size: clamp(3.7rem, 18vw, 6rem);
            }

            .heroDescription {
                font-size: 0.9rem;
            }

            .heroActions {
                flex-direction: column;
            }

            .heroActions button {
                width: 100%;
            }

            .trustRow {
                flex-direction: column;
            }

            .heroPanel {
                padding: 14px;
                border-radius: 22px;
            }

            .mapPreview {
                height: 260px;
            }

            .panelStats {
                grid-template-columns: 1fr 1fr;
            }

            .heroFooter {
                margin-top: 38px;
            }
        }

        @media (max-width: 460px) {
            .panelStats {
                grid-template-columns: 1fr;
            }

            .panelStats article {
                min-height: 105px;
            }
        }
    `,
};
