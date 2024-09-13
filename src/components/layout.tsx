import {RxDashboard} from "react-icons/rx";
import {BsPeopleFill} from "react-icons/bs";
import {Link} from "react-router-dom";

interface MenuItemType {
    key: string;
    icon: React.ReactNode;
    path: string;
    label: string;
}

const items: MenuItemType[] = [
    {
        key: "job",
        icon: <RxDashboard/>,
        path: "/job",
        label: "Job",
    },
    {
        key: "company",
        icon: <BsPeopleFill/>,
        path: "/company",
        label: "Company",
    },
];
const Layout = () => {

    return (
        <>
            <ul className={'w-[200px] h-[100vh] p-3 bg-gray-200'}>
                {
                    items.map((item: MenuItemType) => (
                        <Link to={item.path} key={item.key}>
                            <li
                                className={`flex items-center h-[40px] gap-3 px-4 rounded hover:bg-gray-400] ${window.location.pathname == item.path ? "bg-gray-400" : ""}`}>{item.icon} {item.label}</li>
                        </Link>
                    ))
                }
            </ul>
        </>

    );
};

export default Layout;
