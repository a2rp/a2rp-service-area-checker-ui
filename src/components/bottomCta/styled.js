import styled from "styled-components";

export const Styled = {
    Wrapper: styled.section`
        position: relative;
        padding-top: 0;
    `,

    Card: styled.div`
        padding: 32px;
        border-radius: var(--radius-xl);
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 24px;

        @media (max-width: 991px) {
            flex-direction: column;
            align-items: flex-start;
        }

        @media (max-width: 767px) {
            padding: 22px 18px;
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
        background: rgba(34, 197, 94, 0.1);
        border: 1px solid rgba(34, 197, 94, 0.18);
        color: var(--color-primary);
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

    Actions: styled.div`
        display: flex;
        align-items: center;
        gap: 12px;
        flex-wrap: wrap;
    `,

    PrimaryButton: styled.button`
        min-height: 52px;
        padding: 0 22px;
        border-radius: 999px;
        background: var(--color-primary);
        color: #041108;
        font-size: 14px;
        font-weight: 800;
        transition:
            transform var(--transition),
            background var(--transition),
            box-shadow var(--transition);

        &:hover {
            background: var(--color-primary-hover);
            transform: translateY(-1px);
            box-shadow: 0 14px 30px rgba(34, 197, 94, 0.2);
        }

        &:active {
            transform: translateY(0);
        }
    `,

    SecondaryButton: styled.button`
        min-height: 52px;
        padding: 0 22px;
        border-radius: 999px;
        background: rgba(255, 255, 255, 0.04);
        border: 1px solid var(--color-border);
        color: var(--color-text);
        font-size: 14px;
        font-weight: 700;
        transition:
            transform var(--transition),
            border-color var(--transition),
            background var(--transition);

        &:hover {
            transform: translateY(-1px);
            border-color: var(--color-border-strong);
            background: rgba(255, 255, 255, 0.07);
        }

        &:active {
            transform: translateY(0);
        }
    `,
};
