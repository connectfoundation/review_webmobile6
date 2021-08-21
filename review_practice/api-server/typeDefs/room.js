import { gql } from 'apollo-server';

export default gql`
    type Room {
        id: ID!
        name: String
        price: Int
        maxGuest: Int
        starRating: Int
        reviewNum: Int
        imagePath: String
        roomTypeId: Int
    }

    extend type Query {
        rooms(searchOptions: RoomsFilteringOptionInput): [RoomsResponse]
    }

    extend type Mutation {
        reserveRoom(data: ReserveRoomInput): ReserveRoomResponse
    }

    "Input"
    input RoomsFilteringOptionInput {
        date: DateFilterInput
        personnel: PersonnelFilterInput
        price: PriceFilterInput
    }

    input DateFilterInput {
        checkIn: String!
        checkOut: String!
    }

    input PersonnelFilterInput {
        adult: Int!
        children: Int!
        infant: Int!
    }

    input PriceFilterInput {
        startPrice: Int!
        endPrice: Int!
    }

    input ReserveRoomInput {
        roomId: ID!
        date: DateFilterInput!
        personnel: PersonnelFilterInput!
    }

    "Response"
    type RoomsResponse {
        room: Room!
        roomOption: RoomOption!
    }

    type ReserveRoomResponse {
        success: Boolean!
    }
`;
