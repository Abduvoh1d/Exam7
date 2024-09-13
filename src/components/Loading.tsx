import {Spin} from "antd";

function Loading() {
    return (
        <div className={'flex justify-center items-center'}>
            <Spin/>
        </div>
    );
}

export default Loading;