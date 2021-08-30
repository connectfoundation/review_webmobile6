import styled from 'styled-components';

export const DatePicker = styled.div`
    && {
        vertical-align: none;
    }

    .DayPicker {
        box-shadow: none;
    }

    .CalendarMonth_caption {
        margin-bottom: 1rem;
    }

    /* Calendar color */
    .CalendarDay__selected_span,
    .CalendarDay__hovered_span:hover,
    .CalendarDay__hovered_span {
        background: var(--primary-light-color);
        color: white;
        border: 1px solid white;
    }

    .CalendarDay__selected,
    .CalendarDay__default:hover,
    .CalendarDay__selected:hover,
    .CalendarDay__selected_span:active,
    .CalendarDay__selected_span:hover {
        background: var(--primary-basic-color);
        color: white;
        border: 1px solid white;
    }

    .CalendarDay__blocked_out_of_range:hover {
        background: white;
        color: lightgray;
        border: 1px solid lightgray;
    }

    .CalendarDay__defaultCursor {
        cursor: pointer;
    }
`;

export const DatePickerButtonWrapper = styled.div`
    && {
        margin-top: 2rem;

        display: flex;
        flex-direction: row;
        justify-content: space-between;

        .Save-Button {
            color: var(--primary-basic-color);
        }

        a:hover {
            text-decoration: underline;
            cursor: pointer;
        }
    }
`;
