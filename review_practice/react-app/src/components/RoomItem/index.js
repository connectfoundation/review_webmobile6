import React, { useState } from 'react';
import Style from './style';

const convertOptionDataToStrings = (maxGuest, option) => {
    const { bed, bedroom, bathroom, freeParking, wifi, kitchen, washer } = option;
    const optionFirstLine = `인원 ${maxGuest}명 · 침실 ${bedroom}개 · 침대 ${bed}개 · 욕실 ${bathroom}개`;
    const optionSecondLine = `${freeParking ? '건물 내 무료 주차 ' : ''}${wifi ? '무선 인터넷 ' : ''}${
        kitchen ? '주방 ' : ''
    }${washer ? '세탁기 ' : ''}`;
    return { optionFirstLine, optionSecondLine };
};

export default ({ info, option, reserveButtonHandle }) => {
    const { optionFirstLine, optionSecondLine } = convertOptionDataToStrings(info.maxGuest, option);
    return (
        <Style>
            <div className="Room-image"></div>
            <div className="Room-Content">
                <h3>{info.name}</h3>
                <p>{optionFirstLine}</p>
                <p>{optionSecondLine}</p>
                <div className="Room-Content-BottomArea">
                    <div>
                        {[...Array(info.starRating).keys()].map((_, index) => (
                            <span key={index}>&#x2B50;</span>
                        ))}
                        <span className="Review-Count">{info.reviewNum}</span>
                    </div>
                    <button onClick={() => reserveButtonHandle({ roomId: info.id })}>예약하기</button>
                </div>
            </div>
        </Style>
    );
};
