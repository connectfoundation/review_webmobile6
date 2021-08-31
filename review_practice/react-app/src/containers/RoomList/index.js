import React, { useState, useContext } from 'react';
import { useQuery } from '@apollo/react-hooks';

import * as Style from './style';

import { SearchRoomContext } from 'pages/SearchRoom';

import RoomItem from 'components/RoomItem';
import Modal from 'components/Modal';
import ReservationModalBody from './ReservationModalBody';

export default () => {
    const {
        searchOption: { query, searchOptions },
    } = useContext(SearchRoomContext);
    const [reserveButtonState, setReserveButtonState] = useState({ isClicked: false, roomId: null });
    const { loading, error, data } = useQuery(query, {
        variables: { searchOptions: searchOptions },
    });

    if (loading) return <Style.Loading>Loading...</Style.Loading>;
    if (error) alert('숙소를 불러오는데 실패했습니다');

    const reserveButtonHandle = ({ roomId }) => {
        const state = reserveButtonState.isClicked
            ? { ...reserveButtonState, isClicked: false, roomId: null }
            : { ...reserveButtonState, isClicked: true, roomId };
        setReserveButtonState(state);
    };

    const getRoomById = roomId => {
        return data.rooms.filter(({ room }) => room.id === roomId)[0].room;
    };

    const clickOutOfModalAreaHandle = e => {
        if (e.target.classList.contains('modal')) setReserveButtonState({ isClicked: false, roomId: null });
    };

    return (
        <Style.Main>
            <Style.Section>
                <h1 className="RoomList-CountTitle">숙소 {data.rooms.length}개</h1>
                {data.rooms.map(({ room, roomOption }) => (
                    <RoomItem key={room.id} info={room} option={roomOption} reserveButtonHandle={reserveButtonHandle} />
                ))}
            </Style.Section>
            {reserveButtonState.isClicked && (
                <Modal
                    body={
                        <ReservationModalBody
                            room={getRoomById(reserveButtonState.roomId)}
                            searchOptions={searchOptions}
                            closeModal={() => setReserveButtonState(false)}
                        />
                    }
                    clickOutOfModalAreaHandle={clickOutOfModalAreaHandle}
                />
            )}
        </Style.Main>
    );
};
