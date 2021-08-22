import React, { createContext, useReducer } from 'react';

import { initialSearchOptionState, searchOptionReducer } from './SearchOptionReducer';

import SearchBar from 'containers/SearchBar';
import RoomList from 'containers/RoomList';

export const SearchRoomContext = createContext();

export const SearchRoom = ({ history }) => {
    const [searchOption, dispatchSearchOption] = useReducer(searchOptionReducer, initialSearchOptionState);

    return (
        <SearchRoomContext.Provider value={{ searchOption, dispatchSearchOption }}>
            <SearchBar history={history} />
            <RoomList />
        </SearchRoomContext.Provider>
    );
};
