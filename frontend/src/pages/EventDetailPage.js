import { useParams } from "react-router-dom";

function EventDetailPage() {
    const params = useParams();

    return (
        <>
            <h1>We are on EventDetailPage</h1>
            <p>
                Event {params.eventId}
            </p>
        </>
    );
}

export default EventDetailPage;