import styled from "styled-components";

export const Styled = {
    Wrapper: styled.section`
        position: relative;
    `,

    Inner: styled.div`
        max-width: 860px;
        margin: 0 auto;
        text-align: center;
    `,

    Content: styled.div`
        margin-bottom: 48px;
    `,

    Title: styled.h1`
        font-size: clamp(34px, 4vw, 56px);
        font-weight: 800;
        letter-spacing: -0.04em;
    `,

    Subtitle: styled.p`
        margin-top: 16px;
        font-size: 16px;
        line-height: 1.7;
        color: var(--color-text-muted);
    `,

    Stats: styled.div`
        margin-top: 40px;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 16px;

        @media (max-width: 768px) {
            grid-template-columns: repeat(2, 1fr);
        }
    `,

    StatCard: styled.div`
        padding: 20px 16px;
        border-radius: var(--radius-md);
        background: var(--color-surface);
        border: 1px solid var(--color-border);
        box-shadow: var(--shadow-soft);
    `,

    StatNumber: styled.div`
        font-size: 22px;
        font-weight: 700;
        color: var(--color-heading);
    `,

    StatLabel: styled.div`
        margin-top: 6px;
        font-size: 13px;
        color: var(--color-text-soft);
    `,
};
