import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import Modal from './index';

/*
 * Modal.test.js
 *
 * Modal component Test
 *
 */

/* Test List
- [x] 모달의 기본 padding은 2rem이다.
- [x] 흰색 배경에 둥근 모서리를 가지고 있으며 그림자를 가지고 있다.
*/

describe('Modal', () => {
    it('모달의 기본 padding은 2rem이다.', () => {
        // Given
        const { getByRole } = render(<Modal />);
        const modal = getByRole('dialog');

        // Then
        expect(modal).toHaveStyle('padding: 2rem;');
    });

    it('배경이 흰색이다.', () => {
        // Given
        const { getByRole } = render(<Modal />);
        const modal = getByRole('dialog');

        // Then
        expect(modal).toHaveStyle('background-color: white;');
        expect(modal).toHaveStyle('border-radius: 0.5rem;');
        expect(modal).toHaveStyle('box-shadow: 0 0 5px 0 lightgray;');
    });
});
