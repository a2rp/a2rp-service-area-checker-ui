import styled from "styled-components";

export const Styled = {
    Wrapper: styled.section`
        position: relative;
        padding-top: 72px;
    `,

    Grid: styled.div`
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 18px;

        @media (max-width: 991px) {
            grid-template-columns: 1fr;
        }
    `,

    Card: styled.div`
        padding: 28px;
        border-radius: var(--radius-xl);

        @media (max-width: 767px) {
            padding: 20px 16px;
        }
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
        font-size: clamp(24px, 2.8vw, 34px);
        font-weight: 800;
        letter-spacing: -0.03em;
        line-height: 1.2;
    `,

    Subtitle: styled.p`
        margin-top: 12px;
        font-size: 15px;
        line-height: 1.75;
        color: var(--color-text-muted);
    `,

    List: styled.div`
        margin-top: 24px;
        display: grid;
        gap: 12px;
    `,

    ListItem: styled.div`
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        gap: 14px;
        padding: 16px;
        border-radius: var(--radius-md);
        background: rgba(255, 255, 255, 0.03);
        border: 1px solid var(--color-border);

        @media (max-width: 640px) {
            flex-direction: column;
        }
    `,

    Label: styled.div`
        font-size: 12px;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 0.04em;
        color: var(--color-text-soft);
    `,

    Value: styled.div`
        font-size: 15px;
        font-weight: 700;
        color: var(--color-heading);
        text-align: right;
        line-height: 1.6;

        @media (max-width: 640px) {
            text-align: left;
        }
    `,

    Reasons: styled.div`
        margin-top: 24px;
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 12px;

        @media (max-width: 640px) {
            grid-template-columns: 1fr;
        }
    `,

    ReasonCard: styled.div`
        padding: 18px 16px;
        border-radius: var(--radius-md);
        background: rgba(255, 255, 255, 0.03);
        border: 1px solid var(--color-border);
    `,

    ReasonTitle: styled.h3`
        font-size: 16px;
        font-weight: 700;
        color: var(--color-heading);
        line-height: 1.35;
    `,

    ReasonText: styled.p`
        margin-top: 10px;
        font-size: 14px;
        line-height: 1.75;
        color: var(--color-text-muted);
    `,
};
