import React from 'react';
import * as Style from './style';

export default ({ body, clickOutOfModalAreaHandle }) => {
    return (
        <Style.Modal className="modal" role="dialog" onClick={clickOutOfModalAreaHandle}>
            <Style.ModalDialog className="modal-dialog">{body}</Style.ModalDialog>
        </Style.Modal>
    );
};
