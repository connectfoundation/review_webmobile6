import gql from 'graphql-tag';

export const ADD_BOOKING = gql`
    mutation ReserveRoom($data: ReserveRoomInput) {
        reserveRoom(data: $data) {
            success
        }
    }
`;
