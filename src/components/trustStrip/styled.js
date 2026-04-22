import styled from "styled-components";

export const Styled = {
    Wrapper: styled.section`
        position: relative;
        padding-top: 72px;
        padding-bottom: 72px;
    `,

    Card: styled.div`
        padding: 28px;
        border-radius: var(--radius-xl);
        display: grid;
        grid-template-columns: minmax(0, 1.3fr) minmax(0, 1fr);
        gap: 24px;
        align-items: center;

        @media (max-width: 991px) {
            grid-template-columns: 1fr;
        }

        @media (max-width: 767px) {
            padding: 20px 16px;
        }
    `,

    Content: styled.div`
        max-width: 760px;
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
        font-size: clamp(24px, 2.8vw, 38px);
        font-weight: 800;
        letter-spacing: -0.03em;
        line-height: 1.2;
    `,

    Text: styled.p`
        margin-top: 12px;
        font-size: 15px;
        line-height: 1.8;
        color: var(--color-text-muted);
    `,

    Stats: styled.div`
        display: grid;
        grid-template-columns: 1fr;
        gap: 12px;
    `,

    StatItem: styled.div`
        padding: 18px 16px;
        border-radius: var(--radius-md);
        background: rgba(255, 255, 255, 0.03);
        border: 1px solid var(--color-border);
    `,

    StatValue: styled.div`
        font-size: 18px;
        font-weight: 800;
        color: var(--color-heading);
        line-height: 1.3;
    `,

    StatLabel: styled.div`
        margin-top: 6px;
        font-size: 13px;
        color: var(--color-text-soft);
        line-height: 1.6;
    `,
};
