import React, { useEffect } from 'react';

import * as Style from './style';

/* 
personnelItems: [state, setState, rendering되는 이름, payload에 담길 이름]
personnelControlled: 버튼클릭 시 호출되는 함수
*/
export default ({ personnelItems, requestToServer, personnelControlled, deleteButtonHandle }) => {
    const saveButtonHandler = () => () => {
        const personnel = personnelItems.reduce((payload, item) => {
            const [stateValue, stateName] = [item[0], item[3]];
            payload[stateName] = stateValue;
            return payload;
        }, {});
        requestToServer(personnel);
    };

    const decreaseButtonHandler = (state, setState) => () => {
        if (state === 0) return;
        setState(state - 1);
    };

    const increaseButtonHandler = (state, setState) => () => {
        setState(state + 1);
    };

    useEffect(() => {
        const states = personnelItems.map(item => item[0]);
        personnelControlled(states);
    });

    return (
        <Style.PersonnelController>
            {personnelItems.map((state, index) => (
                <Style.PersonnelItem key={index}>
                    <Style.ItemNameWrapper>{state[2]}</Style.ItemNameWrapper>
                    <Style.ControllButtonWrapper>
                        <button
                            className={state[0] === 0 ? 'isNonClickable' : ''}
                            onClick={decreaseButtonHandler(state[0], state[1])}
                        >
                            -
                        </button>
                        <span>{state[0]}+</span>
                        <button onClick={increaseButtonHandler(state[0], state[1])}>+</button>
                    </Style.ControllButtonWrapper>
                </Style.PersonnelItem>
            ))}
            <Style.PersonnelControllerButtonWrapper>
                <a onClick={deleteButtonHandle}>삭제</a>
                <a className="Save-Button" onClick={saveButtonHandler()}>
                    저장
                </a>
            </Style.PersonnelControllerButtonWrapper>
        </Style.PersonnelController>
    );
};
