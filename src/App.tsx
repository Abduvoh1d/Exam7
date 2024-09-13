import { ConfigProvider } from "antd";
import {
    createBrowserRouter,
    Outlet,
    RouterProvider,
} from "react-router-dom";
import {Companies} from "./pages/company/Company.tsx";
import {Jobs} from "./pages/job/Job.tsx";
import {Layout} from "./components/layout.tsx";

const routes = createBrowserRouter([
    {
        path: "/",
        element: (
            <Layout>
                <Outlet />
            </Layout>
        ),
        children: [
            {
                path: "companies",
                element: <Companies />,
            },
            {
                path: "jobs",
                element: <Jobs />,
            },
        ],
    },
]);

function App() {
    return (
        <ConfigProvider>
            <RouterProvider router={routes}></RouterProvider>
        </ConfigProvider>
    );
}

export default App;
