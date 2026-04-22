import styled from "styled-components";

export const Styled = {
    Wrapper: styled.div`
        position: relative;
    `,

    Card: styled.div`
        height: 100%;
        padding: 22px;
        border-radius: var(--radius-lg);
        transition:
            transform var(--transition),
            border-color var(--transition),
            box-shadow var(--transition);

        &:hover {
            transform: translateY(-4px);
            border-color: var(--color-border-strong);
            box-shadow: var(--shadow-card);
        }

        @media (max-width: 767px) {
            padding: 18px;
        }
    `,

    IconWrap: styled.div`
        width: 54px;
        height: 54px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 18px;
        background: rgba(34, 197, 94, 0.1);
        border: 1px solid rgba(34, 197, 94, 0.16);
        color: var(--color-primary);
        font-size: 22px;
    `,

    Top: styled.div`
        margin-top: 18px;
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        gap: 12px;

        @media (max-width: 767px) {
            flex-direction: column;
            align-items: flex-start;
        }
    `,

    Title: styled.h3`
        flex: 1;
        font-size: 20px;
        font-weight: 800;
        letter-spacing: -0.02em;
        line-height: 1.3;
    `,

    Description: styled.p`
        margin-top: 14px;
        font-size: 14px;
        line-height: 1.75;
        color: var(--color-text-muted);
    `,

    NoteWrap: styled.div`
        margin-top: 18px;
        padding-top: 16px;
        border-top: 1px solid var(--color-border);
    `,

    NoteLabel: styled.div`
        font-size: 11px;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 0.05em;
        color: var(--color-text-soft);
    `,

    Note: styled.p`
        margin-top: 8px;
        font-size: 13px;
        line-height: 1.7;
        color: var(--color-text);
    `,
};
