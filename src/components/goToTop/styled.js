import styled from "styled-components";

export const Styled = {
    Wrapper: styled.div`
        position: fixed;
        right: 24px;
        bottom: 24px;
        z-index: 1200;

        button {
            width: 48px;
            height: 48px;
            padding: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 1px solid rgba(118, 255, 157, 0.28);
            border-radius: 50%;
            background: #0d2d1b;
            color: #76ff9d;
            cursor: pointer;
            box-shadow:
                0 16px 36px rgba(0, 0, 0, 0.24),
                0 0 0 1px rgba(255, 255, 255, 0.03);
            transition:
                transform 0.2s ease,
                background 0.2s ease,
                border-color 0.2s ease;
        }

        button:hover {
            transform: translateY(-4px);
            border-color: rgba(118, 255, 157, 0.55);
            background: #143d25;
        }

        button:focus-visible {
            outline: 2px solid #76ff9d;
            outline-offset: 3px;
        }

        button svg {
            width: 18px;
            height: 18px;
        }

        @media (max-width: 700px) {
            right: 16px;
            bottom: 16px;

            button {
                width: 44px;
                height: 44px;
            }
        }
    `,
};
