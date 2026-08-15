import styled from "styled-components";

export const Styled = {
    Wrapper: styled.section`
        position: relative;
        padding: 0 24px 120px;
        background: #f4f6f4;
        color: #101510;
        scroll-margin-top: 88px;

        .resultInner {
            width: min(1440px, 100%);
            margin: 0 auto;
        }

        .resultCard {
            position: relative;
            display: grid;
            grid-template-columns: 260px 1fr;
            overflow: hidden;
            border: 1px solid #d8ded9;
            border-radius: 30px;
            background: #ffffff;
            box-shadow: 0 28px 80px rgba(25, 49, 33, 0.08);
        }

        .resultCard::before {
            content: "";
            position: absolute;
            inset: 0 auto 0 0;
            width: 4px;
            background: #18743c;
        }

        .resultCard.limited::before {
            background: #d6a11d;
        }

        .resultCard.unavailable::before {
            background: #c94b4b;
        }

        .statusColumn {
            position: relative;
            padding: 34px 28px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            border-right: 1px solid #e0e5e1;
            background: linear-gradient(
                145deg,
                rgba(24, 116, 60, 0.08),
                rgba(24, 116, 60, 0.02)
            );
        }

        .resultCard.limited .statusColumn {
            background: linear-gradient(
                145deg,
                rgba(214, 161, 29, 0.1),
                rgba(214, 161, 29, 0.02)
            );
        }

        .resultCard.unavailable .statusColumn {
            background: linear-gradient(
                145deg,
                rgba(201, 75, 75, 0.09),
                rgba(201, 75, 75, 0.02)
            );
        }

        .statusIcon {
            width: 58px;
            height: 58px;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 1px solid rgba(24, 116, 60, 0.2);
            border-radius: 50%;
            background: rgba(24, 116, 60, 0.08);
            color: #18743c;
        }

        .resultCard.limited .statusIcon {
            border-color: rgba(214, 161, 29, 0.28);
            background: rgba(214, 161, 29, 0.09);
            color: #9a710d;
        }

        .resultCard.unavailable .statusIcon {
            border-color: rgba(201, 75, 75, 0.24);
            background: rgba(201, 75, 75, 0.08);
            color: #b73f3f;
        }

        .statusIcon svg {
            width: 24px;
            height: 24px;
        }

        .statusLabel {
            margin-top: 24px;
            color: #78837b;
            font-family: "Antonio", sans-serif;
            font-size: 0.6rem;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.15em;
        }

        .statusValue {
            margin-top: 7px;
            font-family: "Antonio", sans-serif;
            font-size: 2rem;
            font-weight: 700;
            line-height: 1;
            text-transform: uppercase;
        }

        .statusZip {
            margin-top: 13px;
            color: #667169;
            font-family: "Antonio", sans-serif;
            font-size: 0.68rem;
            font-weight: 600;
            letter-spacing: 0.1em;
        }

        .resultContent {
            padding: 36px;
        }

        .resultHeader {
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
            gap: 30px;
        }

        .eyebrow {
            color: #7b867e;
            font-family: "Antonio", sans-serif;
            font-size: 0.6rem;
            font-weight: 600;
            letter-spacing: 0.15em;
        }

        .resultHeader h2 {
            margin-top: 10px;
            font-family: "Antonio", sans-serif;
            font-size: clamp(2rem, 3.2vw, 3.4rem);
            font-weight: 700;
            line-height: 0.98;
            text-transform: uppercase;
            letter-spacing: -0.03em;
        }

        .coverageBadge {
            flex: 0 0 auto;
            min-height: 36px;
            padding: 0 12px;
            display: inline-flex;
            align-items: center;
            gap: 8px;
            border: 1px solid rgba(24, 116, 60, 0.2);
            border-radius: 999px;
            background: rgba(24, 116, 60, 0.07);
            color: #18743c;
            font-family: "Antonio", sans-serif;
            font-size: 0.62rem;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.08em;
        }

        .coverageBadge i {
            width: 6px;
            height: 6px;
            border-radius: 50%;
            background: currentColor;
        }

        .coverageBadge.limited {
            border-color: rgba(214, 161, 29, 0.25);
            background: rgba(214, 161, 29, 0.08);
            color: #956d0c;
        }

        .coverageBadge.unavailable {
            border-color: rgba(201, 75, 75, 0.22);
            background: rgba(201, 75, 75, 0.07);
            color: #b63e3e;
        }

        .resultDescription {
            max-width: 820px;
            margin-top: 18px;
            color: #657068;
            font-size: 0.9rem;
            line-height: 1.8;
        }

        .resultGrid {
            margin-top: 30px;
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            border: 1px solid #e0e5e1;
            border-radius: 18px;
            overflow: hidden;
        }

        .resultGrid article {
            min-height: 118px;
            padding: 20px;
            display: flex;
            align-items: center;
            gap: 13px;
            border-right: 1px solid #e0e5e1;
            background: #fafbfa;
        }

        .resultGrid article:last-child {
            border-right: 0;
        }

        .infoIcon {
            flex: 0 0 auto;
            width: 38px;
            height: 38px;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 1px solid #dce2dd;
            border-radius: 50%;
            background: #ffffff;
            color: #18743c;
        }

        .infoIcon svg {
            width: 15px;
            height: 15px;
        }

        .infoLabel {
            display: block;
            color: #858f88;
            font-family: "Antonio", sans-serif;
            font-size: 0.58rem;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.11em;
        }

        .resultGrid strong {
            display: block;
            margin-top: 6px;
            color: #172018;
            font-size: 0.82rem;
            font-weight: 700;
            line-height: 1.45;
            word-break: break-word;
        }

        .resultFooter {
            margin-top: 24px;
            padding-top: 18px;
            display: flex;
            justify-content: space-between;
            gap: 20px;
            border-top: 1px solid #e5e9e6;
            color: #8b948e;
            font-size: 0.62rem;
        }

        .resultFooter span:first-child {
            display: inline-flex;
            align-items: center;
            gap: 7px;
            color: #647068;
        }

        .resultFooter i {
            width: 6px;
            height: 6px;
            border-radius: 50%;
            background: #24a755;
            box-shadow: 0 0 10px rgba(36, 167, 85, 0.35);
        }

        @media (max-width: 1100px) {
            .resultCard {
                grid-template-columns: 220px 1fr;
            }

            .resultGrid {
                grid-template-columns: repeat(2, 1fr);
            }

            .resultGrid article:nth-child(2) {
                border-right: 0;
            }

            .resultGrid article:nth-child(-n + 2) {
                border-bottom: 1px solid #e0e5e1;
            }
        }

        @media (max-width: 760px) {
            padding: 0 18px 90px;

            .resultCard {
                grid-template-columns: 1fr;
                border-radius: 22px;
            }

            .statusColumn {
                border-right: 0;
                border-bottom: 1px solid #e0e5e1;
            }

            .resultContent {
                padding: 26px 22px;
            }

            .resultHeader {
                flex-direction: column;
            }

            .resultGrid {
                grid-template-columns: 1fr;
            }

            .resultGrid article {
                min-height: 100px;
                border-right: 0;
                border-bottom: 1px solid #e0e5e1;
            }

            .resultGrid article:last-child {
                border-bottom: 0;
            }

            .resultFooter {
                flex-direction: column;
            }
        }
    `,
};
