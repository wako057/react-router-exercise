import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./pages/MainLayout";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import EventsPage from "./pages/EventsPage";
import EditEventPage from "./pages/EditEventPage";
import NewEventPage from "./pages/NewEventPage";
import EventDetailPage from "./pages/EventDetailPage";
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
                    { index: true, element: <EventsPage />, loader: async () => {
                        const response = await fetch('http://localhost:8080/events');

                        if (!response.ok) {
                            // setError('Fetching events failed.');
                        } else {
                            const resData = await response.json();
                            return resData.events;
                        }
                    }},
                    { path: ':eventId', element: <EventDetailPage /> },
                    { path: 'new', element: <NewEventPage /> },
                    { path: ':eventId/edit', element: <EditEventPage /> },

                ]
            },

        ],
    }
]);
