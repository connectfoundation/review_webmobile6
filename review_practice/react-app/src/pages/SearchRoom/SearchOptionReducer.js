import * as RoomAPI from 'graphql/query/room';

export const initialSearchOptionState = { query: RoomAPI.GET_ROOMS, searchOptions: {} };

export const searchOptionReducer = (state, { type, payload }) => {
    switch (type) {
        case 'reset': {
            return initialSearchOptionState;
        }
        case 'setDateFilter': {
            return { ...state, searchOptions: { ...state.searchOptions, date: payload } };
        }
        case 'setPersonnelFilter': {
            return { ...state, searchOptions: { ...state.searchOptions, personnel: payload } };
        }
        case 'setPriceFilter': {
            return { ...state, searchOptions: { ...state.searchOptions, price: payload } };
        }
        default: {
            throw new Error(`unexpected action.type: ${type}`);
        }
    }
};
