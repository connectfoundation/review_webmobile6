import gql from 'graphql-tag';

export const GET_ROOMS = gql`
    query RoomsFilteredByDate($searchOptions: RoomsFilteringOptionInput) {
        rooms(searchOptions: $searchOptions) {
            room {
                id
                name
                price
                maxGuest
                starRating
                reviewNum
                imagePath
                roomTypeId
            }
            roomOption {
                id
                bed
                bedroom
                bathroom
                freeParking
                wifi
                kitchen
                washer
            }
        }
    }
`;

export const createDateSearchOption = ({ startDate, endDate }) => ({
    checkIn: startDate.format('YYYY[-]MM[-]DD'),
    checkOut: endDate.format('YYYY[-]MM[-]DD'),
});
