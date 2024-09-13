import {useCompanyQuery} from "../../store/company.ts";
import Loading from "../../components/Loading.tsx";
import Error from "../Error.tsx";
import Layout from "../../components/layout.tsx";
import {Button, Drawer, Space, Table} from 'antd';
import type {TableProps} from 'antd';
import {useState} from "react";

interface DataType {
    key: string;
    name: string;
    age: number;
    address: string;
    tags: string[];
}


function Company() {
    const {data, error, isLoading} = useCompanyQuery(undefined)
    const [open, setOpen] = useState(false);

    const columns: TableProps<DataType>['columns'] = [
        {
            title: 'N',
            dataIndex: 'key',
            key: 'name',
            render: (text) => <a>{text}</a>,
        },
        {
            title: 'Title',
            dataIndex: 'title',
            key: 'name',
            render: (text) => <a>{text}</a>,
        },
        {
            title: 'Description',
            dataIndex: 'description',
            key: 'age',
        },
        {
            title: 'Website Name',
            dataIndex: 'website',
            key: 'address',
        },
        {
            title: 'Action',
            key: 'action',
            render: () => (
                <Space size="middle">
                    <a onClick={showDrawer}>
                        Edite
                    </a>
                    <a>Delete</a>
                </Space>
            ),
        },
    ];

    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };

    if (isLoading) {
        return <Loading/>;
    }

    if (error) {
        return <Error/>;
    }


    return (
        <div className={'flex items-start justify-start'}>
            <Layout/>
            <div className={'p-3 flex flex-col items-end justify-center'}>
                <Button type="primary" onClick={showDrawer} className={'mb-5'}>
                    Add+
                </Button>
                <Table columns={columns} dataSource={data} className={'w-[1000px]'}/>
                <div>
                    <Drawer
                        title="Basic Drawer"
                        placement="right"
                        closable={false}
                        onClose={onClose}
                        open={open}
                        getContainer={false}
                    >

                    </Drawer>
                </div>
            </div>
        </div>
    );
}

export default Company;