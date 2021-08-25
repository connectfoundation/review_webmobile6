import styled from 'styled-components';

export const PersonnelController = styled.div`
    && {
        width: 20rem;
    }
`;

export const PersonnelItem = styled.div`
    && {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;

        margin-bottom: 2rem;
    }
`;

export const ItemNameWrapper = styled.div`
    && {
        display: flex;
        flex-direction: column;

        span + span {
            margin-top: 0.5rem;

            color: gray;
            font-size: 0.8rem;
        }
    }
`;

export const ControllButtonWrapper = styled.div`
    && {
        width: 8rem;

        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;

        button {
            width: 2.4rem;
            height: 2.4rem;

            border-radius: 1.2rem;

            font-size: 1.5rem;
            font-weight: bold;

            color: var(--primary-basic-color);
            border: 2px solid var(--primary-basic-color);

            cursor: pointer;
            outline: none;
        }

        .isNonClickable {
            color: var(--primary-light-color);
            border: 2px solid var(--primary-light-color);
            cursor: not-allowed;
        }
    }
`;

export const PersonnelControllerButtonWrapper = styled.div`
    && {
        margin-top: 3rem;

        display: flex;
        flex-direction: row;
        justify-content: space-between;

        font-size: 1.1rem;
        font-weight: 450;

        .Save-Button {
            color: var(--primary-basic-color);
        }

        a:hover {
            text-decoration: underline;
            cursor: pointer;
        }
    }
`;
