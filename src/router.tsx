import { createBrowserRouter } from "react-router-dom";
import Root from "./routes/Root";
import Login from "./routes/Login";
import Register from "./routes/Register";
import List from "./routes/List";
import Error from "./routes/Error";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <Error />,
        children: [
            {
                path: 'login',
                element: <Login />
            },
            {
                path: 'register',
                element: <Register />
            },
            {
                path: 'list',
                element: <List />
            }
        ]
    }
])

export default router;