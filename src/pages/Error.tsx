import {Link} from "react-router-dom";

function Error() {
    return (
        <div className={'w-[100%] h-[100vh] flex flex-col items-center justify-center'}>
            <h2 className={'text-5xl mb-5 font-bold'}>Not Found!</h2>
            <Link to="/job" className={'px-5 py-2 rounded bg-black text-white'}>Back to Home</Link>
        </div>
    );
}

export default Error;