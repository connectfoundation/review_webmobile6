import React from 'react';

import * as Style from './style';

import Slider from '@material-ui/core/Slider';

const PriceRangeSlider = ({ value, minPrice, maxPrice, rangeSlided, saveButtonHandle, deleteButtonHandle }) => {
    const [price, setPrice] = value;

    const handleChange = (event, newValue) => {
        const [newValueStart, newValueEnd] = newValue;
        if (newValueEnd - newValueStart <= 5000) setPrice(price);
        else {
            setPrice(newValue);
            rangeSlided(newValue);
        }
    };

    return (
        <Style.PriceRangeSlider>
            <Slider
                className="Range-Slider"
                aria-labelledby="range-slider"
                value={price}
                onChange={handleChange}
                min={minPrice}
                max={maxPrice}
            />
            <Style.RangedPriceWrapper>
                <input className="Price-Input" type="text" value={`￦ ${price[0]}`} readOnly />
                <span className="Price-Connector">-</span>
                <input className="Price-Input" type="text" value={`￦ ${price[1]}`} readOnly />
            </Style.RangedPriceWrapper>
            <Style.PriceRangeSliderButtonWrapper>
                <a onClick={deleteButtonHandle}>삭제</a>
                <a className="Save-Button" onClick={() => saveButtonHandle(price)}>
                    저장
                </a>
            </Style.PriceRangeSliderButtonWrapper>
        </Style.PriceRangeSlider>
    );
};

export default PriceRangeSlider;
