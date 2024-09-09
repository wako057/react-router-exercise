import { Link } from "react-router-dom";

const DUMMY_EVENTS = [
    { id: 'e1', eventName: 'Alborosie in Cabaret Sauvage' },
    { id: 'e2', eventName: 'PJ Harvey in Fete de l\'Humanite' },
    { id: 'e3', eventName: 'Alborosie in Cabaret Sauvage' },
];
function EventsPage() {
    return (
        <>
            <h1>We are on EventsPage</h1>
            {DUMMY_EVENTS.map((event) =>
            (<ul>
                <li>
                    <Link to={event.id}>{event.eventName}</Link>

                </li>
            </ul>)
            )}
        </>
    );
}

export default EventsPage;