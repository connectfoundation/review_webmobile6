import React, { useState } from 'react';
import Style from './style';

import SearchButton from './SearchButton';
import Logo from 'components/Logo';
import Modal from 'components/Modal';
import { DateFilter, PersonnelFilter, PriceFilter } from './ModalBody';

import { isMobile } from 'Constants';
import { clearToken } from 'service/TokenManager';

export default ({ history }) => {
    const dateButtonState = useState({ isClicked: false, buttonName: '날짜' });
    const personnelButtonState = useState({ isClicked: false, buttonName: '인원' });
    const priceButtonState = useState({ isClicked: false, buttonName: '가격' });
    const buttonStateList = [dateButtonState, personnelButtonState, priceButtonState];
    const buttonModalBodyList = [
        (buttonState, setButtonState) => <DateFilter buttonState={buttonState} setButtonState={setButtonState} />,
        (buttonState, setButtonState) => <PersonnelFilter buttonState={buttonState} setButtonState={setButtonState} />,
        (buttonState, setButtonState) => <PriceFilter buttonState={buttonState} setButtonState={setButtonState} />,
    ];

    const searchStates = buttonStateList.map((state, index) => {
        return {
            name: state[0].buttonName,
            modalBody: buttonModalBodyList[index](state[0], state[1]),
            isClicked: state[0].isClicked,
            setIsClicked: isClicked => {
                state[1]({ ...state[0], isClicked });
            },
        };
    });

    const filterButtonClicked = (state, setState) => () => {
        searchStates.forEach(button => button.isClicked && button.setIsClicked(false));
        setState(!state);
    };

    const logout = () => {
        clearToken();
        history.push('/');
    };

    const buttonList = searchStates.map((info, index) => (
        <li key={index}>
            <SearchButton
                name={info.name}
                modalBody={info.modalBody}
                isClicked={info.isClicked}
                setIsClicked={info.setIsClicked}
                onClick={filterButtonClicked}
            />
        </li>
    ));

    return (
        <Style>
            <Logo />
            <nav className="Search-Bar">
                <ul>{buttonList}</ul>
            </nav>
            <button className="Logout-Button" onClick={logout}>
                로그아웃
            </button>
            {isMobile() &&
                searchStates.map((info, index) => info.isClicked && <Modal key={index} body={info.modalBody} />)}
        </Style>
    );
};
