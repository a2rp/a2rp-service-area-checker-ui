import styled from "styled-components";

export const Styled = {
    Wrapper: styled.section`
        position: relative;
        padding: 120px 24px;
        overflow: hidden;
        background: #edf1ed;
        color: #101510;

        &::before {
            content: "";
            position: absolute;
            top: 0;
            right: -180px;
            width: 520px;
            height: 520px;
            border-radius: 50%;
            background: rgba(24, 116, 60, 0.06);
            filter: blur(120px);
            pointer-events: none;
        }

        .trustInner {
            position: relative;
            z-index: 2;
            width: min(1440px, 100%);
            margin: 0 auto;
        }

        .trustIntro {
            max-width: 760px;
        }

        .eyebrow {
            color: #18743c;
            font-family: "Antonio", sans-serif;
            font-size: 0.62rem;
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

        .trustIntro > p {
            max-width: 590px;
            margin-top: 25px;
            color: #667168;
            font-size: 0.9rem;
            line-height: 1.8;
        }

        .trustGrid {
            margin-top: 62px;
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            border-top: 1px solid #cfd6d0;
            border-bottom: 1px solid #cfd6d0;
        }

        .trustGrid article {
            position: relative;
            min-height: 340px;
            padding: 28px;
            display: flex;
            flex-direction: column;
            border-right: 1px solid #cfd6d0;
            transition:
                background 0.25s ease,
                transform 0.25s ease;
        }

        .trustGrid article:last-child {
            border-right: 0;
        }

        .trustGrid article:hover {
            background: rgba(255, 255, 255, 0.5);
            transform: translateY(-4px);
        }

        .itemTop {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 20px;
        }

        .itemNumber {
            color: #89938c;
            font-family: "Antonio", sans-serif;
            font-size: 0.58rem;
            font-weight: 600;
            letter-spacing: 0.13em;
        }

        .itemIcon {
            width: 44px;
            height: 44px;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 1px solid #cad2cb;
            border-radius: 50%;
            background: #f7f9f7;
            color: #18743c;
        }

        .itemIcon svg {
            width: 17px;
            height: 17px;
        }

        .itemValue {
            margin-top: auto;
            padding-top: 70px;
            color: #18743c;
            font-family: "Antonio", sans-serif;
            font-size: clamp(2.5rem, 4vw, 4rem);
            font-weight: 700;
            line-height: 0.9;
            text-transform: uppercase;
            letter-spacing: -0.03em;
        }

        .trustGrid h3 {
            margin-top: 14px;
            font-family: "Antonio", sans-serif;
            font-size: 1.2rem;
            font-weight: 600;
            text-transform: uppercase;
        }

        .trustGrid p {
            margin-top: 12px;
            color: #6f7972;
            font-size: 0.74rem;
            line-height: 1.7;
        }

        .networkFooter {
            min-height: 84px;
            display: grid;
            grid-template-columns: auto 1fr auto;
            gap: 26px;
            align-items: center;
        }

        .networkState {
            display: flex;
            align-items: center;
            gap: 11px;
        }

        .liveDot {
            position: relative;
            width: 9px;
            height: 9px;
            border-radius: 50%;
            background: #24a755;
            box-shadow: 0 0 14px rgba(36, 167, 85, 0.4);
        }

        .liveDot::after {
            content: "";
            position: absolute;
            inset: -5px;
            border: 1px solid rgba(36, 167, 85, 0.18);
            border-radius: 50%;
        }

        .networkState div {
            display: grid;
            gap: 3px;
        }

        .networkState div > span {
            color: #8b958e;
            font-family: "Antonio", sans-serif;
            font-size: 0.52rem;
            font-weight: 600;
            letter-spacing: 0.13em;
        }

        .networkState strong {
            color: #263028;
            font-family: "Antonio", sans-serif;
            font-size: 0.72rem;
            font-weight: 600;
            text-transform: uppercase;
        }

        .networkLine {
            height: 1px;
            background: #cfd6d0;
        }

        .networkLine span {
            display: block;
            width: 24%;
            height: 100%;
            background: #18743c;
        }

        .networkMessage {
            color: #7d8780;
            font-family: "Antonio", sans-serif;
            font-size: 0.58rem;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.1em;
        }

        @media (max-width: 1100px) {
            .trustGrid {
                grid-template-columns: repeat(2, 1fr);
            }

            .trustGrid article:nth-child(2) {
                border-right: 0;
            }

            .trustGrid article:nth-child(-n + 2) {
                border-bottom: 1px solid #cfd6d0;
            }
        }

        @media (max-width: 760px) {
            padding: 90px 18px;

            .trustGrid {
                grid-template-columns: 1fr;
            }

            .trustGrid article {
                min-height: 280px;
                border-right: 0;
                border-bottom: 1px solid #cfd6d0;
            }

            .trustGrid article:nth-child(2) {
                border-bottom: 1px solid #cfd6d0;
            }

            .trustGrid article:last-child {
                border-bottom: 0;
            }

            .itemValue {
                padding-top: 55px;
            }

            .networkFooter {
                padding: 22px 0;
                grid-template-columns: 1fr;
                gap: 16px;
            }

            .networkLine {
                width: 100%;
            }
        }
    `,
};
