import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./pages/MainLayout";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import EventsPage from "./pages/EventsPage";
import EditEventPage from "./pages/EditEventPage";
import NewEventPage from "./pages/NewEventPage";
import EventDetailPage from "./pages/EventDetailPage";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        errorElement: <ErrorPage />,
        children: [
            { index: true, element: <HomePage /> },
            { path: 'events', element: <EventsPage /> },
            { path: 'events/:eventId', element: <EventDetailPage /> },
            { path: 'events/new', element: <NewEventPage /> },
            { path: 'events/:eventId/edit', element: <EditEventPage /> },

        ],
    }
]);
