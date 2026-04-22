import styled from "styled-components";

export const Styled = {
    Wrapper: styled.section`
        position: relative;
        margin-top: -8px;
    `,

    Card: styled.div`
        max-width: 920px;
        margin: 0 auto;
        padding: 32px;
        border-radius: var(--radius-xl);

        @media (max-width: 767px) {
            padding: 22px 18px;
        }
    `,

    Header: styled.div`
        text-align: center;
    `,

    Eyebrow: styled.div`
        display: inline-flex;
        align-items: center;
        justify-content: center;
        min-height: 32px;
        padding: 6px 12px;
        border-radius: 999px;
        background: var(--color-primary-soft);
        color: var(--color-primary);
        border: 1px solid rgba(34, 197, 94, 0.18);
        font-size: 12px;
        font-weight: 700;
        letter-spacing: 0.04em;
        text-transform: uppercase;
    `,

    Title: styled.h2`
        margin-top: 18px;
        font-size: clamp(24px, 3vw, 36px);
        font-weight: 800;
        letter-spacing: -0.03em;
    `,

    Subtitle: styled.p`
        margin: 12px auto 0;
        max-width: 700px;
        font-size: 15px;
        line-height: 1.75;
        color: var(--color-text-muted);
    `,

    Form: styled.form`
        margin-top: 28px;
        display: grid;
        grid-template-columns: minmax(0, 1fr) auto;
        gap: 14px;

        @media (max-width: 767px) {
            grid-template-columns: 1fr;
        }
    `,

    InputWrap: styled.div`
        display: flex;
        align-items: center;
        min-height: 62px;
        padding: 0 18px;
        border-radius: var(--radius-md);
        background: rgba(255, 255, 255, 0.03);
        border: 1px solid var(--color-border);
        transition:
            border-color var(--transition),
            box-shadow var(--transition);

        &:focus-within {
            border-color: rgba(34, 197, 94, 0.34);
            box-shadow: var(--shadow-glow);
        }
    `,

    Input: styled.input`
        width: 100%;
        font-size: 16px;
        color: var(--color-text);

        &::placeholder {
            color: var(--color-text-soft);
        }
    `,

    Button: styled.button`
        min-height: 62px;
        padding: 0 24px;
        border-radius: var(--radius-md);
        background: var(--color-primary);
        color: #041108;
        font-size: 15px;
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

    ErrorText: styled.p`
        margin-top: 12px;
        color: var(--service-unavailable);
        font-size: 14px;
        font-weight: 600;
    `,

    HelperText: styled.p`
        margin-top: 18px;
        text-align: center;
        font-size: 13px;
        color: var(--color-text-soft);
        line-height: 1.7;
    `,

    Chips: styled.div`
        margin-top: 22px;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 10px;
    `,

    Chip: styled.button`
        min-height: 38px;
        padding: 8px 14px;
        border-radius: 999px;
        background: rgba(255, 255, 255, 0.04);
        border: 1px solid var(--color-border);
        color: var(--color-text-muted);
        font-size: 13px;
        font-weight: 700;
        transition:
            transform var(--transition),
            border-color var(--transition),
            color var(--transition),
            background var(--transition);

        &:hover {
            transform: translateY(-1px);
            color: var(--color-heading);
            border-color: var(--color-border-strong);
            background: rgba(255, 255, 255, 0.07);
        }
    `,
};
