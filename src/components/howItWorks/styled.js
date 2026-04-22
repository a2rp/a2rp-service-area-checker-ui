import styled from "styled-components";

export const Styled = {
    Wrapper: styled.section`
        position: relative;
        padding-top: 72px;
    `,

    Header: styled.div`
        max-width: 760px;
        margin: 0 auto 28px;
        text-align: center;
    `,

    Eyebrow: styled.div`
        display: inline-flex;
        align-items: center;
        justify-content: center;
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
        font-size: clamp(26px, 3vw, 40px);
        font-weight: 800;
        letter-spacing: -0.03em;
    `,

    Subtitle: styled.p`
        margin-top: 12px;
        font-size: 15px;
        line-height: 1.75;
        color: var(--color-text-muted);
    `,

    Grid: styled.div`
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 18px;

        @media (max-width: 991px) {
            grid-template-columns: 1fr;
        }
    `,

    Card: styled.div`
        padding: 24px;
        border-radius: var(--radius-xl);
        text-align: left;

        @media (max-width: 767px) {
            padding: 20px 16px;
        }
    `,

    StepNumber: styled.div`
        font-size: 12px;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 0.04em;
        color: var(--color-text-soft);
    `,

    IconWrap: styled.div`
        width: 56px;
        height: 56px;
        margin-top: 16px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 18px;
        background: rgba(34, 197, 94, 0.1);
        border: 1px solid rgba(34, 197, 94, 0.16);
        color: var(--color-primary);
        font-size: 24px;
    `,

    CardTitle: styled.h3`
        margin-top: 18px;
        font-size: 20px;
        font-weight: 800;
        letter-spacing: -0.02em;
        line-height: 1.3;
    `,

    CardText: styled.p`
        margin-top: 12px;
        font-size: 14px;
        line-height: 1.75;
        color: var(--color-text-muted);
    `,
};
