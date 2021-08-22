import styled from 'styled-components';

export const Main = styled.main`
    && {
        display: flex;
        flex-direction: column;
        align-items: center;

        .logo {
            display: block;

            margin-top: 5rem;
            margin-bottom: 2rem;
            padding: 1rem;

            height: 13rem;
            width: 13rem;

            animation: boxFade 1s 0.5s infinite linear alternate;
            fill: var(--primary-basic-color);
        }
    }

    @keyframes boxFade {
        0% {
            opacity: 1;
        }
        50% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
`;

export const InputField = styled.div`
    && {
        width: 20rem;

        margin-bottom: 1.5rem;

        display: flex;
        flex-direction: column;

        input {
            width: 100%;
            padding: 1rem;
            margin-top: 0.7rem;

            border: 1px solid rgba(0, 0, 0, 0.3);
            border-radius: 0.3rem;
            box-sizing: border-box;

            outline: none;
        }
    }
`;

export const RegisterButton = styled.button`
    && {
        width: 20rem;
        height: 3.5rem;

        margin-bottom: 1rem;

        color: white;
        font-size: 1.1rem;
        background-color: var(--primary-basic-color);

        border-radius: 0.3rem;

        cursor: pointer;
    }
`;
