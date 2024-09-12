import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./pages/MainLayout";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import EventsPage, { loader as eventsLoader } from "./pages/EventsPage";
import EditEventPage from "./pages/EditEventPage";
import NewEventPage, { action as newEventAction } from "./pages/NewEventPage";
import EventDetailPage, { loader as eventDetailsLoader, action as deleteEventAction } from "./pages/EventDetailPage";
import EventLayout from "./pages/EventLayout";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        errorElement: <ErrorPage />,
        children: [
            { index: true, element: <HomePage /> },
            {
                path: 'events', element: <EventLayout />,
                children: [
                    { index: true, element: <EventsPage />, loader: eventsLoader },
                    {
                        path: ':eventId',
                        id: 'event-detail',
                        loader: eventDetailsLoader,
                        children: [
                            { index: true, element: <EventDetailPage />, action: deleteEventAction },
                            { path: 'edit', element: <EditEventPage /> },
                        ],
                    },
                    { path: 'new', element: <NewEventPage />, action: newEventAction },

                ]
            },

        ],
    }
]);
