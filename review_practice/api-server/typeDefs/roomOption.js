import { gql } from 'apollo-server';

export default gql`
    type RoomOption {
        id: ID
        bed: Int
        bedroom: Int
        bathroom: Int
        freeParking: Boolean
        wifi: Boolean
        kitchen: Boolean
        washer: Boolean
    }
`;
