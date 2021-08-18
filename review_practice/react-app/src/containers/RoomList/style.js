import styled from 'styled-components';

export const Main = styled.main`
    && {
        padding-top: 4rem;

        .modal {
            position: fixed;
            top: 0;

            width: 100%;
            height: 100%;

            background: rgba(0, 0, 0, 0.2);
        }

        .modal-dialog {
            margin: 10rem 25%;
        }
    }

    .RoomList-CountTitle {
        margin: 1rem;
        font-size: 2rem;
        font-weight: bold;
    }

    @media only screen and (max-width: 800px) {
        && {
            padding-top: 14rem;
        }
    }
`;

export const Section = styled.section``;

export const ReservationModalBody = styled.div`
    && {
        display: flex;
        flex-direction: column;
    }

    .Loading-Statement {
        margin-bottom: 2rem;
    }

    h2 {
        font-size: 2rem;
        font-weight: bold;

        line-height: 2.5rem;
    }

    hr {
        border: 0.5px solid lightgray;
        margin-top: 0.7rem;
    }

    label {
        margin-top: 1rem;
        font-size: 0.8rem;
    }

    button {
        margin-top: 1rem;

        height: 3rem;

        background-color: var(--primary-basic-color);
        color: white;

        border-radius: 0.3rem;

        outline: none;
        cursor: pointer;
    }

    input {
        padding: 0.7rem;
        margin-top: 0.5rem;

        border: 1px solid rgba(0, 0, 0, 0.3);
        box-sizing: border-box;
    }

    .Price-Wrapper {
        margin-top: 1.5rem;
        margin-bottom: 0;

        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    small {
        margin-top: 1rem;

        color: red;
        font-size: 0.7rem;
        text-align: center;
    }

    strong {
        font-weight: bold;
    }

    .Text-Center {
        width: 100%;
        font-weight: 500;
        color: var(--primary-light-color);

        text-align: center;
    }

    .Non-Clickable {
        background-color: lightgray;
        cursor: not-allowed;
    }
`;

export const DateWrapper = styled.div`
    && {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    .Date-Arrow {
        display: block;

        padding: 0 1rem;
        padding-top: 0.5rem;

        height: 47px;
        line-height: 47px;

        text-align: center;

        font-size: 1.2rem;
        font-weight: 400;
    }

    .Date-Input {
        width: 100%;
    }
`;

export const Loading = styled.div`
    && {
        position: fixed;
        top: 100px;

        width: 100%;
        height: 300px;

        text-align: center;
        font-size: 6rem;
    }
`;
