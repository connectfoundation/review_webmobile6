import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import SearchBar from './index';

/*
 * SearchBar.test.js
 *
 * SearchBar component Test
 *
 */

/* Test List
- [x] 처음 rendering되는 component는 날짜, 인원, 숙소 유형, 가격, 필터 추가하기 버튼을 소유하고 있다.
- [x] 버튼을 클릭하면 해당 버튼과 관련된 modal이 생성된다.
- [x] 클릭된 버튼은 나머지 버튼과 다른 배경색, 글자색, 테두리색을 가진다.
- [x] 다른 버튼을 클릭하면 기존에 클릭된 버튼의 색상은 변경된다.
- [x] 다른 버튼을 클릭하면 기존에 클릭된 버튼의 모달은 닫힌다.
*/

describe('SearchBar', () => {
    beforeAll(() => {
        Object.defineProperty(window, 'matchMedia', {
            value: jest.fn(() => {
                return { matches: true };
            }),
        });
    });

    it('처음 rendering되는 component는 날짜, 인원, 숙소 유형, 가격, 필터 추가하기 버튼을 소유하고 있다.', () => {
        const { getByText } = render(<SearchBar />);
        getByText('날짜');
        getByText('인원');
        getByText('숙소 유형');
        getByText('가격');
        getByText('필터 추가하기');
    });

    it('버튼을 클릭하면 해당 버튼과 관련된 modal이 생성된다.', () => {
        // Given: 날짜 버튼
        const { getByText, getByRole } = render(<SearchBar />);
        const filterByDayButton = getByText('날짜');

        // When: 날짜 버튼 클릭
        fireEvent.click(filterByDayButton);

        // Then
        getByRole('dialog');
    });

    it('클릭된 버튼은 나머지 버튼과 다른 배경색, 글자색, 테두리색을 가진다.', () => {
        // Given: 날짜 버튼, 인원 버튼
        const { getByText } = render(<SearchBar />);
        const filterByDayButton = getByText('날짜');

        // When: 날짜 버튼 클릭
        fireEvent.click(filterByDayButton);

        // Then
        expect(filterByDayButton).toHaveStyle('color: white;;');
        expect(filterByDayButton).toHaveStyle('border-color: transparent;');
    });

    it('다른 버튼을 클릭하면 기존에 클릭된 버튼의 모달은 닫힌다.', () => {
        // Given: 날짜 버튼, 인원 버튼
        const { getByText, getAllByRole } = render(<SearchBar />);
        const filterByDayButton = getByText('날짜');
        const filterByPeopleButton = getByText('인원');

        // When: 날짜 버튼 클릭
        fireEvent.click(filterByDayButton);
        fireEvent.click(filterByPeopleButton);

        // Then
        expect(getAllByRole('dialog').length).toBe(1);
    });
});
