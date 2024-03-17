import { HomePage } from "../page/HomePage";
import { AboutPage } from "../page/AboutPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <HomePage />,
        },
        {
            path: "/about",
            element: <AboutPage />,
        },
    ]);

    return (
        <>
            <RouterProvider router={router} />
        </>
    );
}

export default App;
