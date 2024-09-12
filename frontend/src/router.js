import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./pages/MainLayout";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import EventsPage, { loader as eventsLoader } from "./pages/EventsPage";
import EditEventPage from "./pages/EditEventPage";
import NewEventPage from "./pages/NewEventPage";
import EventDetailPage, { loader as eventDetailsLoader } from "./pages/EventDetailPage";
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
                    {
                        index: true, element: <EventsPage />, loader: eventsLoader
                    },
                    { path: ':eventId', element: <EventDetailPage />, loader: eventDetailsLoader },
                    { path: 'new', element: <NewEventPage /> },
                    { path: ':eventId/edit', element: <EditEventPage /> },

                ]
            },

        ],
    }
]);
