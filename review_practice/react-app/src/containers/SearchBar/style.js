import styled from 'styled-components';

export default styled.header`
    && {
        position: fixed;

        width: 100%;

        display: flex;
        flex-direction: row;
        align-items: center;

        background-color: white;

        box-shadow: 0 0 2px 0 lightgray;

        .modal {
            position: absolute;
            top: 5rem;
        }

        .Logout-Button {
            position: absolute;
            right: 2rem;

            cursor: pointer;
            outline: none;
        }
    }

    .logo {
        height: 32px;
        width: 32px;
        display: block;
        fill: var(--primary-basic-color);
        padding: 1rem;
    }

    .Search-Bar {
        padding-right: 1rem;
    }

    .Search-Bar ul {
        padding: 0;
        list-style: none;
    }

    .Search-Bar > ul > li {
        float: left;

        padding: 0 10px;

        .Search-Button {
            width: 100%;
            height: 2.5rem;

            padding: 0 1.25rem;

            border-radius: 1.25rem;
            border: solid 2px var(--primary-basic-color);

            background-color: white;

            color: var(--primary-basic-color);
            font-size: 1rem;
            font-weight: 600;

            outline: none;
            cursor: pointer;
        }

        .Search-Button:hover {
            background-color: var(--primary-light-color);
            border-color: transparent;

            color: white;
            cursor: pointer;
        }

        .Search-Button:active,
        .isClicked {
            color: white;
            background-color: var(--primary-basic-color);
            border-color: transparent;
        }
    }

    @media only screen and (max-width: 800px) {
        && {
            flex-direction: column;

            .modal {
                position: static;
            }

            .modal-dialog {
                border-radius: 0;
                box-shadow: none;
            }

            .Logout-Button {
                position: static;
                margin: 1rem;
            }
        }

        .logo {
            height: 60px;
            width: 60px;
            display: block;
            fill: var(--primary-basic-color);
            padding: 1rem;
        }

        .Search-Bar {
            padding: 1rem;
        }
    }
`;
