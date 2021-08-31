import React from 'react';

import Modal from 'components/Modal';
import { isMobile } from 'Constants';

export default ({ name, modalBody, isClicked, setIsClicked, onClick }) => {
    return (
        <div>
            <button
                className={isClicked ? 'isClicked Search-Button' : 'Search-Button'}
                onClick={onClick(isClicked, setIsClicked)}
            >
                {name}
            </button>
            {!isMobile() && isClicked && <Modal body={modalBody} />}
        </div>
    );
};
