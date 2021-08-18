import styled from 'styled-components';

export default styled.article`
    && {
        display: flex;
        flex-direction: row;

        margin: 1rem;

        border: 1px solid lightgray;
    }

    .Room-image {
        width: 15rem;
        height: 10rem;
        background-size: 100% 100%;
        background-image: url('https://a0.muscache.com/im/pictures/37e211bb-6ef8-44b6-8022-7427e7a241a5.jpg?aki_policy=large');
    }

    .Room-Content {
        width: 100%;

        display: flex;
        flex-direction: column;
        justify-content: space-between;

        padding: 1rem;

        h3 {
            margin-bottom: 0.5rem;
            font-size: 1.25rem;
        }

        p {
            margin-bottom: 0.25rem;
            color: gray;
        }
    }

    .Room-Content-BottomArea {
        display: flex;
        flex-direction: row;
        align-items: flex-end;
        justify-content: space-between;
        flex-grow: 2;

        button {
            height: 2.5rem;

            padding: 0.5rem 1.25rem;

            border-radius: 1.25rem;
            border-color: transparent;

            background-color: var(--primary-basic-color);

            color: white;
            font-size: 1rem;

            outline: none;
        }

        button:hover,
        button:active {
            border: 1px solid var(--primary-basic-color);
            color: var(--primary-basic-color);
            background-color: white;
        }
    }

    .Review-Count {
        margin-left: 0.5rem;
    }
`;
