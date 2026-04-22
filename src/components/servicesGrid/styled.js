import styled from "styled-components";

export const Styled = {
    Wrapper: styled.section`
        position: relative;
        padding-top: 72px;
    `,

    Header: styled.div`
        display: flex;
        align-items: flex-end;
        justify-content: space-between;
        gap: 24px;
        margin-bottom: 28px;

        @media (max-width: 991px) {
            flex-direction: column;
            align-items: flex-start;
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

    Counts: styled.div`
        display: grid;
        grid-template-columns: repeat(3, minmax(120px, 1fr));
        gap: 12px;
        width: 100%;
        max-width: 420px;

        @media (max-width: 640px) {
            grid-template-columns: 1fr;
            max-width: 100%;
        }
    `,

    CountCard: styled.div`
        padding: 16px;
        border-radius: var(--radius-md);
        text-align: center;
    `,

    CountNumber: styled.div`
        font-size: 24px;
        font-weight: 800;
        color: var(--color-heading);
        line-height: 1;
    `,

    CountLabel: styled.div`
        margin-top: 8px;
        font-size: 13px;
        font-weight: 700;

        &.availableText {
            color: var(--service-available);
        }

        &.limitedText {
            color: var(--service-limited);
        }

        &.unavailableText {
            color: var(--service-unavailable);
        }
    `,

    Grid: styled.div`
        display: grid;
        grid-template-columns: repeat(4, minmax(0, 1fr));
        gap: 18px;

        @media (max-width: 1199px) {
            grid-template-columns: repeat(3, minmax(0, 1fr));
        }

        @media (max-width: 991px) {
            grid-template-columns: repeat(2, minmax(0, 1fr));
        }

        @media (max-width: 640px) {
            grid-template-columns: 1fr;
        }
    `,
};
