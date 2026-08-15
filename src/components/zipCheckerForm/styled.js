import styled from "styled-components";

export const Styled = {
    Wrapper: styled.section`
        position: relative;
        padding: 120px 24px;
        overflow: hidden;
        background: #f4f6f4;
        color: #101510;
        scroll-margin-top: 88px;

        &::before {
            content: "";
            position: absolute;
            top: 0;
            left: 50%;
            width: min(1440px, calc(100% - 48px));
            height: 1px;
            background: #d9ded9;
            transform: translateX(-50%);
        }

        .checkerInner {
            position: relative;
            z-index: 2;
            width: min(1440px, 100%);
            margin: 0 auto;
            display: grid;
            grid-template-columns: minmax(0, 0.85fr) minmax(460px, 1.15fr);
            gap: clamp(60px, 8vw, 130px);
            align-items: center;
        }

        .checkerIntro {
            max-width: 590px;
        }

        .sectionLabel {
            display: flex;
            align-items: center;
            gap: 11px;
            color: #5b685f;
            font-family: "Antonio", sans-serif;
            font-size: 0.66rem;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.14em;
        }

        .labelIcon {
            width: 34px;
            height: 34px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            border: 1px solid #cad2cc;
            border-radius: 50%;
            color: #126532;
            background: #ffffff;
        }

        .labelIcon svg {
            width: 14px;
            height: 14px;
        }

        h2 {
            margin-top: 27px;
            font-family: "Antonio", sans-serif;
            font-size: clamp(3.8rem, 6vw, 7rem);
            font-weight: 700;
            line-height: 0.91;
            text-transform: uppercase;
            letter-spacing: -0.04em;
        }

        h2 span {
            display: block;
            color: #18743c;
        }

        .checkerIntro > p {
            max-width: 540px;
            margin-top: 28px;
            color: #626c65;
            font-size: 0.94rem;
            line-height: 1.85;
        }

        .introPoints {
            margin-top: 32px;
            display: grid;
            gap: 13px;
        }

        .introPoints span {
            display: flex;
            align-items: center;
            gap: 10px;
            color: #384239;
            font-size: 0.78rem;
        }

        .introPoints svg {
            flex: 0 0 auto;
            color: #18743c;
        }

        .checkerCard {
            position: relative;
            padding: 34px;
            border: 1px solid #d8ded9;
            border-radius: 28px;
            background: #ffffff;
            box-shadow:
                0 28px 80px rgba(25, 49, 33, 0.09),
                0 3px 12px rgba(25, 49, 33, 0.04);
        }

        .checkerCard::after {
            content: "";
            position: absolute;
            right: -1px;
            bottom: -1px;
            width: 90px;
            height: 90px;
            border-right: 2px solid #76ff9d;
            border-bottom: 2px solid #76ff9d;
            border-bottom-right-radius: 28px;
            pointer-events: none;
        }

        .cardTop {
            display: flex;
            justify-content: space-between;
            gap: 24px;
            align-items: flex-start;
        }

        .cardTop > div {
            display: grid;
            gap: 6px;
        }

        .cardEyebrow {
            color: #7d8880;
            font-family: "Antonio", sans-serif;
            font-size: 0.6rem;
            font-weight: 600;
            letter-spacing: 0.15em;
        }

        .cardTop h3 {
            font-family: "Antonio", sans-serif;
            font-size: clamp(1.8rem, 2.7vw, 2.7rem);
            font-weight: 600;
            line-height: 1;
            text-transform: uppercase;
        }

        .secureBadge {
            min-height: 34px;
            padding: 0 11px;
            display: inline-flex;
            align-items: center;
            gap: 7px;
            border: 1px solid #d8ded9;
            border-radius: 999px;
            background: #f7f9f7;
            color: #18743c;
            font-family: "Antonio", sans-serif;
            font-size: 0.62rem;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.09em;
        }

        form {
            margin-top: 34px;
        }

        form > label {
            display: block;
            margin-bottom: 10px;
            color: #616c64;
            font-family: "Antonio", sans-serif;
            font-size: 0.62rem;
            font-weight: 600;
            letter-spacing: 0.13em;
        }

        .inputShell {
            min-height: 72px;
            padding: 0 18px;
            display: grid;
            grid-template-columns: auto 1fr auto;
            gap: 13px;
            align-items: center;
            border: 1px solid #cfd6d0;
            border-radius: 17px;
            background: #fafbfa;
            transition:
                border-color 0.2s ease,
                box-shadow 0.2s ease,
                background 0.2s ease;
        }

        .inputShell:focus-within {
            border-color: #18743c;
            background: #ffffff;
            box-shadow: 0 0 0 4px rgba(24, 116, 60, 0.08);
        }

        .inputShell.hasError {
            border-color: #c84545;
            box-shadow: 0 0 0 4px rgba(200, 69, 69, 0.06);
        }

        .inputIcon {
            width: 34px;
            height: 34px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            background: #edf3ee;
            color: #18743c;
        }

        .inputShell input {
            width: 100%;
            min-width: 0;
            border: 0;
            outline: 0;
            background: transparent;
            color: #101510;
            font-family: "Antonio", sans-serif;
            font-size: 1.18rem;
            font-weight: 600;
            letter-spacing: 0.08em;
        }

        .inputShell input::placeholder {
            color: #a0aaa3;
            font-family: inherit;
            font-size: 0.96rem;
            font-weight: 400;
            letter-spacing: 0.03em;
        }

        .digitCount {
            color: #88928b;
            font-family: "Antonio", sans-serif;
            font-size: 0.62rem;
            font-weight: 600;
            letter-spacing: 0.08em;
        }

        .errorMessage {
            margin-top: 10px;
            display: flex;
            align-items: center;
            gap: 7px;
            color: #b63838;
            font-size: 0.72rem;
        }

        .submitButton {
            width: 100%;
            min-height: 58px;
            margin-top: 14px;
            padding: 0 20px;
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 10px;
            border: 1px solid #0d2d1b;
            border-radius: 16px;
            background: #0d2d1b;
            color: #ffffff;
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

        .submitButton:hover {
            border-color: #18743c;
            background: #18743c;
            transform: translateY(-1px);
        }

        .submitButton svg {
            transition: transform 0.2s ease;
        }

        .submitButton:hover svg {
            transform: translateX(3px);
        }

        .sampleSection {
            margin-top: 30px;
            padding-top: 25px;
            border-top: 1px solid #e3e7e4;
        }

        .sampleHeading {
            display: flex;
            align-items: center;
            gap: 12px;
            color: #838d86;
            font-family: "Antonio", sans-serif;
            font-size: 0.58rem;
            font-weight: 600;
            letter-spacing: 0.13em;
        }

        .sampleHeading .divider {
            flex: 1;
            height: 1px;
            background: #e2e6e3;
        }

        .sampleList {
            margin-top: 14px;
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 8px;
        }

        .sampleList button {
            min-height: 44px;
            padding: 0 10px;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 6px;
            border: 1px solid #dde2de;
            border-radius: 12px;
            background: #f7f9f7;
            color: #525e55;
            font-family: "Antonio", sans-serif;
            font-size: 0.68rem;
            font-weight: 600;
            letter-spacing: 0.05em;
            cursor: pointer;
            transition:
                color 0.2s ease,
                border-color 0.2s ease,
                background 0.2s ease;
        }

        .sampleList button:hover,
        .sampleList button.active {
            border-color: rgba(24, 116, 60, 0.35);
            background: rgba(24, 116, 60, 0.08);
            color: #18743c;
        }

        .sampleList svg {
            width: 12px;
            height: 12px;
        }

        .cardFooter {
            margin-top: 28px;
            padding-top: 16px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 14px;
            border-top: 1px solid #e6eae7;
            color: #919a94;
            font-size: 0.62rem;
        }

        .statusIndicator {
            display: inline-flex;
            align-items: center;
            gap: 7px;
            color: #657168;
        }

        .statusIndicator i {
            width: 6px;
            height: 6px;
            border-radius: 50%;
            background: #24a755;
            box-shadow: 0 0 10px rgba(36, 167, 85, 0.35);
        }

        @media (max-width: 1050px) {
            .checkerInner {
                grid-template-columns: 1fr;
            }

            .checkerIntro {
                max-width: 760px;
            }

            .checkerCard {
                max-width: 760px;
            }
        }

        @media (max-width: 700px) {
            padding: 90px 18px;

            h2 {
                font-size: clamp(3.7rem, 17vw, 5.5rem);
            }

            .checkerCard {
                padding: 24px;
                border-radius: 22px;
            }

            .checkerCard::after {
                border-bottom-right-radius: 22px;
            }

            .sampleList {
                grid-template-columns: repeat(2, 1fr);
            }

            .cardFooter {
                align-items: flex-start;
                flex-direction: column;
            }
        }

        @media (max-width: 440px) {
            .cardTop {
                flex-direction: column;
            }

            .secureBadge {
                align-self: flex-start;
            }

            .inputShell {
                min-height: 64px;
                padding: 0 13px;
            }

            .inputIcon {
                width: 30px;
                height: 30px;
            }
        }
    `,
};
