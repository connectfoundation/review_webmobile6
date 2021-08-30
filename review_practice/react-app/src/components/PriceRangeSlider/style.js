import styled from 'styled-components';

export const PriceRangeSlider = styled.div`
    && {
        width: 20rem;

        display: flex;
        flex-direction: column;
        align-items: center;

        .MuiSlider-root {
            color: var(--primary-basic-color);
        }

        .Range-Slider {
            margin: 1rem 0;
            width: 90%;
        }

        .MuiSlider-thumb {
            width: 1rem;
            height: 1rem;

            margin-top: -0.45rem;

            background-color: var(--primary-basic-color);
        }

        .MuiSlider-thumb.MuiSlider-active,
        .MuiSlider-thumb.Mui-focusVisible,
        .MuiSlider-thumb:hover {
            box-shadow: 0px 0px 0px 8px var(--primary-light-color);
        }
    }
`;
export const RangedPriceWrapper = styled.div`
    && {
        display: flex;
        flex-direction: row;
        justify-content: space-between;

        input {
            width: 100%;
            padding: 0.7rem;
            margin-top: 0.5rem;

            border: 1px solid rgba(0, 0, 0, 0.3);
            border-radius: 0.3rem;
            box-sizing: border-box;

            outline: none;
        }

        .Price-Connector {
            display: block;

            padding: 0 1rem;
            padding-top: 0.5rem;

            height: 47px;
            line-height: 47px;

            text-align: center;

            font-size: 1.2rem;
            font-weight: 400;
        }
    }
`;

export const PriceRangeSliderButtonWrapper = styled.div`
    && {
        width: 100%;

        margin-top: 2rem;

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
