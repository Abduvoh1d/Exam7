import {
    BrowserRouter, Navigate, Route, Routes,
} from "react-router-dom";
import Job from "./pages/job/Job.tsx";
import Company from "./pages/company/Company.tsx";


function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Navigate to={'/job'}/>}/>
                    <Route path={'/job'} element={<Job/>}/>
                    <Route path={'/company'} element={<Company/>}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App;