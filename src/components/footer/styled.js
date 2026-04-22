import styled from "styled-components";

export const Styled = {
    Wrapper: styled.footer`
        margin-top: 80px;
        padding: 22px 0;
        border-top: 1px solid var(--color-border);
    `,

    Inner: styled.div`
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
        flex-wrap: wrap;

        font-size: 13px;
        color: var(--color-text-soft);
    `,

    Left: styled.div`
        display: flex;
        align-items: center;
        gap: 6px;

        .label {
            opacity: 0.7;
        }

        .value {
            color: var(--color-text);
            font-weight: 600;
        }
    `,

    Right: styled.div`
        display: flex;
        align-items: center;
        gap: 6px;

        .label {
            opacity: 0.7;
        }

        a {
            color: var(--color-primary);
            font-weight: 700;
            text-decoration: none;
            transition: opacity 0.2s ease;

            &:hover {
                opacity: 0.7;
            }
        }
    `,
};
