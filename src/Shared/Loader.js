import { Spin } from 'antd';
import React from 'react';

const Loader = () => {
    return (
        <div className="bg-transparent" style={{
            margin: "20px 0",
            marginBottom: "20px",
            padding: "30px 50px",
            textAlign: "center",
            borderRadius: "4px"
        }}>
            <Spin />
        </div>
    );
};

export default Loader;
