import React, { useState } from 'react';

import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { DayPickerRangeController } from 'react-dates';

import moment from 'moment';
import 'moment/min/locales';

import * as Style from './style';

export default ({ requestToServer, datePicked, deleteButtonHandle, localeLanguage }) => {
    moment.locale(localeLanguage);

    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [focusedInput, setFocusedInput] = useState('startDate');

    const onDatesChange = ({ startDate, endDate }) => {
        datePicked(startDate, endDate);

        setStartDate(startDate);
        setEndDate(endDate);
    };

    const onFocusChange = focusedInput => {
        if (focusedInput === null) setFocusedInput('startDate');
        else setFocusedInput(focusedInput);
    };

    const saveButtonHandler = (startDate, endDate) => () => {
        if (startDate && endDate) requestToServer(startDate, endDate);
    };

    return (
        <Style.DatePicker>
            <DayPickerRangeController
                startDate={startDate}
                endDate={endDate}
                focusedInput={focusedInput}
                onFocusChange={onFocusChange}
                onDatesChange={onDatesChange}
                hideKeyboardShortcutsPanel={true}
                numberOfMonths={2}
                isOutsideRange={day => day.isSameOrBefore()}
                monthFormat="YYYY[년] MM[월]"
            />
            <Style.DatePickerButtonWrapper>
                <a onClick={deleteButtonHandle}>삭제</a>
                <a className="Save-Button" onClick={saveButtonHandler(startDate, endDate)}>
                    저장
                </a>
            </Style.DatePickerButtonWrapper>
        </Style.DatePicker>
    );
};
