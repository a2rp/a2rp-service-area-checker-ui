import styled from "styled-components";

export const Styled = {
    Wrapper: styled.section`
        position: relative;
        padding-top: 72px;
        padding-bottom: 0;
    `,

    Card: styled.div`
        padding: 28px;
        border-radius: var(--radius-xl);

        @media (max-width: 767px) {
            padding: 20px 16px;
        }
    `,

    TopRow: styled.div`
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        gap: 20px;

        @media (max-width: 767px) {
            flex-direction: column;
        }
    `,

    Content: styled.div`
        flex: 1;
    `,

    Eyebrow: styled.div`
        display: inline-flex;
        align-items: center;
        min-height: 30px;
        padding: 6px 12px;
        border-radius: 999px;
        background: rgba(255, 255, 255, 0.05);
        border: 1px solid var(--color-border);
        color: var(--color-text-muted);
        font-size: 12px;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 0.04em;
    `,

    Title: styled.h2`
        margin-top: 16px;
        font-size: clamp(22px, 2.6vw, 34px);
        font-weight: 800;
        letter-spacing: -0.03em;
    `,

    Subtitle: styled.p`
        margin-top: 10px;
        max-width: 760px;
        font-size: 15px;
        line-height: 1.75;
        color: var(--color-text-muted);
    `,

    StatusWrap: styled.div`
        flex-shrink: 0;
        display: flex;
        align-items: center;
    `,

    Grid: styled.div`
        margin-top: 24px;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 14px;

        @media (max-width: 1023px) {
            grid-template-columns: repeat(2, 1fr);
        }

        @media (max-width: 767px) {
            grid-template-columns: 1fr;
        }
    `,

    InfoCard: styled.div`
        padding: 18px 16px;
        border-radius: var(--radius-md);
        background: rgba(255, 255, 255, 0.03);
        border: 1px solid var(--color-border);
        min-height: 108px;
        display: flex;
        flex-direction: column;
        justify-content: center;
    `,

    InfoLabel: styled.div`
        font-size: 12px;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 0.04em;
        color: var(--color-text-soft);
    `,

    InfoValue: styled.div`
        margin-top: 10px;
        font-size: 17px;
        font-weight: 700;
        color: var(--color-heading);
        line-height: 1.5;
        word-break: break-word;
    `,
};
