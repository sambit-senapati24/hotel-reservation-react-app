import React from 'react'
import RoomsFilter from './RoomsFilter'
import RoomsList from './RoomsList'
import { withRoomConsumer } from '../Context'
import Loading from './Loading'

function RoomsContainer({context}) {
    const { loading, sortedRooms, rooms } = context;
    if( loading ) {
        return <Loading />;
    }
    return (
        <>
            <RoomsFilter rooms={rooms} />
            <RoomsList rooms={sortedRooms} />
        </>
    );
}

export default withRoomConsumer(RoomsContainer);

/* function RoomsContainer() {
    return (
        <RoomConsumer>
            {value => {
                const { loading, sortedRooms, rooms } = value;
                if (loading) {
                    return <Loading />
                }
                return (
                    <div>
                        <RoomsFilter rooms={rooms} />
                        <RoomsList rooms={sortedRooms} />
            Hello from Rooms Containers.
                    </div>
                ) 
            }}
        </RoomConsumer>
    )
}

export default RoomsContainer*/
