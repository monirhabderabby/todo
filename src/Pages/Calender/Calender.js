import React from 'react';
import { Calendar } from 'antd';

const Calender = () => {

    const onPanelChange = (value, mode) => {
        console.log(value.format('YYYY-MM-DD'), mode);
      };
    return (
        <div className="h-auto bg-[#f0f3ff] w-[100%] flex justify-center items-center">
            <div className="w-[100%] md:max-w-[80%] lg:max-w-[60%] h-auto flex justify-center my-12 bg-[#fff] rounded-md py-6 px-3">
            <Calendar onPanelChange={onPanelChange} />
            </div>
            </div>
    );
};

export default Calender;