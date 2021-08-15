import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent } from '@testing-library/react';
import RoomItem from 'components/RoomItem';
/*
 * RoomItem.test.js
 *
 * RoomItem component Test
 *
 */

/* Test List
- [] 예약하기 버튼을 누르면 예약 모달이 생성된다.
*/

describe('RoomItem', () => {
    it('예약하기 버튼을 누르면 예약 모달이 생성된다.', () => {
        // Given
        const info = { name: 'name', reviewNum: 1, maxGuest: 3 };
        const option = {
            bed: 2,
            bedroom: 2,
            bathroom: 2,
            freeParking: false,
            wifi: false,
            kitchen: false,
            washer: false,
        };
        const { getByText, getByRole } = render(<RoomItem info={info} option={option} />);
        const reserveButton = getByText('예약하기');

        // When
        fireEvent.click(reserveButton);

        // Then
        getByRole('dialog');
    });
});
