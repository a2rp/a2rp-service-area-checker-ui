import styled from "styled-components";

export const Styled = {
    Wrapper: styled.section`
        position: relative;
        padding: 120px 24px;
        overflow: hidden;
        background: #f4f6f4;
        color: #101510;
        scroll-margin-top: 88px;

        .coverageInner {
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
            color: #18743c;
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
            color: #18743c;
        }

        .sectionHeader > p {
            color: #657068;
            font-size: 0.9rem;
            line-height: 1.8;
        }

        .coverageLayout {
            margin-top: 64px;
            display: grid;
            grid-template-columns: minmax(0, 1.08fr) minmax(390px, 0.92fr);
            gap: 16px;
        }

        .networkCard,
        .detailsPanel {
            border: 1px solid #d9dfda;
            border-radius: 26px;
            background: #ffffff;
            box-shadow: 0 24px 70px rgba(21, 47, 29, 0.06);
        }

        .networkCard {
            padding: 26px;
        }

        .networkTop {
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
            gap: 24px;
        }

        .panelLabel,
        .panelHeading > span {
            color: #7a857d;
            font-family: "Antonio", sans-serif;
            font-size: 0.58rem;
            font-weight: 600;
            letter-spacing: 0.14em;
        }

        .networkTop h3,
        .panelHeading h3 {
            margin-top: 7px;
            font-family: "Antonio", sans-serif;
            font-size: clamp(1.8rem, 3vw, 2.8rem);
            font-weight: 600;
            line-height: 1;
            text-transform: uppercase;
        }

        .networkStatus {
            min-height: 34px;
            padding: 0 11px;
            display: inline-flex;
            align-items: center;
            gap: 7px;
            border: 1px solid rgba(24, 116, 60, 0.2);
            border-radius: 999px;
            background: rgba(24, 116, 60, 0.07);
            color: #18743c;
            font-family: "Antonio", sans-serif;
            font-size: 0.6rem;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.08em;
        }

        .networkStatus i {
            width: 6px;
            height: 6px;
            border-radius: 50%;
            background: #24a755;
            box-shadow: 0 0 10px rgba(36, 167, 85, 0.4);
        }

        .networkMap {
            position: relative;
            height: 390px;
            margin-top: 24px;
            overflow: hidden;
            border: 1px solid #dfe4e0;
            border-radius: 20px;
            background:
                radial-gradient(
                    circle at center,
                    rgba(24, 116, 60, 0.11),
                    transparent 45%
                ),
                #eef3ef;
        }

        .mapGrid {
            position: absolute;
            inset: 0;
            opacity: 0.8;
            background-image:
                linear-gradient(rgba(24, 116, 60, 0.08) 1px, transparent 1px),
                linear-gradient(
                    90deg,
                    rgba(24, 116, 60, 0.08) 1px,
                    transparent 1px
                );
            background-size: 42px 42px;
        }

        .signalRing {
            position: absolute;
            top: 50%;
            left: 50%;
            border: 1px solid rgba(24, 116, 60, 0.18);
            border-radius: 50%;
            transform: translate(-50%, -50%);
        }

        .ringOne {
            width: 190px;
            height: 190px;
        }

        .ringTwo {
            width: 310px;
            height: 310px;
            border-color: rgba(24, 116, 60, 0.09);
        }

        .hubPoint {
            position: absolute;
            top: 50%;
            left: 50%;
            z-index: 2;
            display: flex;
            align-items: center;
            gap: 12px;
            transform: translate(-50%, -50%);
        }

        .hubPoint > span {
            width: 60px;
            height: 60px;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 1px solid rgba(24, 116, 60, 0.25);
            border-radius: 50%;
            background: #ffffff;
            color: #18743c;
            box-shadow: 0 12px 35px rgba(24, 116, 60, 0.12);
        }

        .hubPoint > span svg {
            width: 21px;
            height: 21px;
        }

        .hubPoint div {
            min-width: 150px;
            padding: 10px 12px;
            border: 1px solid #d8ded9;
            border-radius: 12px;
            background: rgba(255, 255, 255, 0.95);
        }

        .hubPoint small {
            display: block;
            color: #89928c;
            font-family: "Antonio", sans-serif;
            font-size: 0.5rem;
            font-weight: 600;
            letter-spacing: 0.12em;
        }

        .hubPoint strong {
            display: block;
            margin-top: 4px;
            font-family: "Antonio", sans-serif;
            font-size: 0.82rem;
            font-weight: 600;
            text-transform: uppercase;
        }

        .zoneTag {
            position: absolute;
            padding: 7px 10px;
            border: 1px solid #d7ddd8;
            border-radius: 999px;
            background: rgba(255, 255, 255, 0.9);
            color: #68736b;
            font-family: "Antonio", sans-serif;
            font-size: 0.54rem;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.08em;
        }

        .zoneOne {
            top: 20%;
            left: 12%;
        }

        .zoneTwo {
            right: 10%;
            bottom: 20%;
        }

        .networkMeta {
            margin-top: 16px;
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 10px;
        }

        .networkMeta div {
            min-height: 94px;
            padding: 16px;
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            border: 1px solid #e0e5e1;
            border-radius: 14px;
            background: #fafbfa;
        }

        .networkMeta span {
            color: #879089;
            font-family: "Antonio", sans-serif;
            font-size: 0.55rem;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.1em;
        }

        .networkMeta strong {
            margin-top: 7px;
            font-size: 0.8rem;
            line-height: 1.4;
        }

        .detailsPanel {
            padding: 28px;
        }

        .detailsList {
            margin-top: 28px;
            display: grid;
        }

        .detailsList article {
            min-height: 76px;
            display: grid;
            grid-template-columns: auto 1fr;
            gap: 14px;
            align-items: center;
            border-bottom: 1px solid #e4e8e5;
        }

        .detailsList article:last-child {
            border-bottom: 0;
        }

        .detailIcon {
            width: 38px;
            height: 38px;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 1px solid #dbe1dc;
            border-radius: 50%;
            background: #f6f8f6;
            color: #18743c;
        }

        .detailIcon svg {
            width: 15px;
            height: 15px;
        }

        .detailLabel {
            display: block;
            color: #8a938d;
            font-family: "Antonio", sans-serif;
            font-size: 0.55rem;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.1em;
        }

        .detailsList strong {
            display: block;
            margin-top: 5px;
            color: #172018;
            font-size: 0.8rem;
            line-height: 1.45;
        }

        .logicSection {
            margin-top: 88px;
        }

        .logicHeader {
            max-width: 780px;
        }

        .logicHeader > span {
            color: #18743c;
            font-family: "Antonio", sans-serif;
            font-size: 0.62rem;
            font-weight: 600;
            letter-spacing: 0.14em;
        }

        .logicHeader h3 {
            margin-top: 12px;
            font-family: "Antonio", sans-serif;
            font-size: clamp(2.2rem, 4vw, 4rem);
            font-weight: 700;
            line-height: 1;
            text-transform: uppercase;
            letter-spacing: -0.03em;
        }

        .logicGrid {
            margin-top: 38px;
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 12px;
        }

        .logicGrid article {
            min-height: 270px;
            padding: 22px;
            display: flex;
            flex-direction: column;
            border: 1px solid #dce2dd;
            border-radius: 18px;
            background: #ffffff;
            transition:
                transform 0.2s ease,
                box-shadow 0.2s ease,
                border-color 0.2s ease;
        }

        .logicGrid article:hover {
            transform: translateY(-4px);
            border-color: rgba(24, 116, 60, 0.3);
            box-shadow: 0 16px 40px rgba(21, 47, 29, 0.06);
        }

        .reasonTop {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        .reasonNumber {
            color: #9aa39d;
            font-family: "Antonio", sans-serif;
            font-size: 0.58rem;
            font-weight: 600;
            letter-spacing: 0.12em;
        }

        .reasonIcon {
            width: 38px;
            height: 38px;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 1px solid #dbe1dc;
            border-radius: 50%;
            background: #f6f8f6;
            color: #18743c;
        }

        .reasonIcon svg {
            width: 15px;
            height: 15px;
        }

        .logicGrid h4 {
            margin-top: auto;
            font-family: "Antonio", sans-serif;
            font-size: 1.45rem;
            font-weight: 600;
            line-height: 1;
            text-transform: uppercase;
        }

        .logicGrid p {
            margin-top: 12px;
            color: #6d776f;
            font-size: 0.75rem;
            line-height: 1.7;
        }

        @media (max-width: 1100px) {
            .coverageLayout {
                grid-template-columns: 1fr;
            }

            .logicGrid {
                grid-template-columns: repeat(2, 1fr);
            }
        }

        @media (max-width: 800px) {
            .sectionHeader {
                grid-template-columns: 1fr;
                gap: 24px;
            }

            .networkMeta {
                grid-template-columns: 1fr;
            }
        }

        @media (max-width: 700px) {
            padding: 90px 18px;

            .networkCard,
            .detailsPanel {
                border-radius: 22px;
            }

            .networkCard {
                padding: 18px;
            }

            .detailsPanel {
                padding: 22px;
            }

            .networkTop {
                flex-direction: column;
            }

            .networkMap {
                height: 320px;
            }

            .hubPoint {
                flex-direction: column;
                text-align: center;
            }

            .hubPoint div {
                min-width: 140px;
            }

            .zoneOne {
                top: 12%;
                left: 6%;
            }

            .zoneTwo {
                right: 6%;
                bottom: 12%;
            }

            .logicGrid {
                grid-template-columns: 1fr;
            }

            .logicGrid article {
                min-height: 230px;
            }
        }
    `,
};
