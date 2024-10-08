import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./pages/MainLayout";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import EventsPage, { loader as eventsLoader } from "./pages/EventsPage";
import EditEventPage from "./pages/EditEventPage";
import NewEventPage from "./pages/NewEventPage";
import EventDetailPage, { loader as eventDetailsLoader, action as deleteEventAction } from "./pages/EventDetailPage";
import EventLayout from "./pages/EventLayout";
import { action as manipulateEventAction } from "./components/EventForm";
import NewsletterPage, { action as newsletterAction } from "./pages/NewsletterPage";


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
                            { path: 'edit', element: <EditEventPage />, action: manipulateEventAction },
                        ],
                    },
                    { path: 'new', element: <NewEventPage />, action: manipulateEventAction },

                ]
            },
            {
                path: 'newsletter',
                element: <NewsletterPage />,
                action: newsletterAction,
            },
        ],
    },
]);
