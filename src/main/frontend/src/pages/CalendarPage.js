import React, { useState } from "react";
import CalendarTable from "../components/CalendarTable";

const CalendarPage = () => {
    const today = new Date();
    const [year, setYear] = useState(today.getFullYear());
    const [month, setMonth] = useState(today.getMonth());

    const handleDateClick = (actionOrDate) => {
        if (actionOrDate === "prev") {
            if (month === 0) {
                setMonth(11);
                setYear((prevYear) => prevYear - 1);
            } else {
                setMonth((prevMonth) => prevMonth - 1);
            }
            setSelectedDate(null); // 선택된 날짜 초기화
        } else if (actionOrDate === "next") {
            if (month === 11) {
                setMonth(0);
                setYear((prevYear) => prevYear + 1);
            } else {
                setMonth((prevMonth) => prevMonth + 1);
            }
            setSelectedDate(null); // 선택된 날짜 초기화
        } else {
            setSelectedDate(actionOrDate); // 특정 날짜 클릭 시
        }
    };

    return (
        <div>
            <h1>캘린더</h1>
            <CalendarTable year={year} month={month} onDateClick={handleDateClick} />
        </div>
    );
};

export default CalendarPage;
