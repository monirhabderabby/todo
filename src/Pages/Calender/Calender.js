import React, { useState } from 'react';
import { DayPicker } from 'react-day-picker';

const Calender = () => {
    const [today, setToday] = useState(new Date())
    return (
        <div className="h-[100vh] bg-[#f0f3ff] w-[100%] flex justify-center items-center">
            <div className="w-[100%] md:max-w-[80%] lg:max-w-[60%] h-auto flex justify-center bg-[#fff]  rounded-md py-6 px-3">
                <DayPicker mode='single' selected={today} onSelect={setToday}
                footer="Every time you tear a leaf off a calendar, you present a new place for new ideas and progress."
                />
            </div>
            </div>
    );
};

export default Calender;