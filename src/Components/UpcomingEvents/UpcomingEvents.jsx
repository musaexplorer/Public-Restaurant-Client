import { useEffect, useState } from "react";
import UpcomingEventsPerCards from "./UpcomingEventsPerCards";

const UpcomingEvents = () => {
    const [events, setEvents] = useState([]);
    useEffect(()=> {
        fetch('http://localhost:5000/events')
        .then(res => res.json())
        .then(data => setEvents(data))
    }, [])

    return (
        <div className="mt-28">
            <h2 className="text-5xl font-serif italic text-yellow-500 text-center">Upcoming Events</h2>
            <h3 className="text-4xl font-light text-center mt-2 uppercase">The future looks bright</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10">
                {
                    events?.map(events => <UpcomingEventsPerCards key={events._id} events={events}></UpcomingEventsPerCards>)
                }
            </div>
        </div>
    );
};

export default UpcomingEvents;