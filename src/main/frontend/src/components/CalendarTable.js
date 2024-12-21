import React, { useEffect, useState } from "react";
import { Badge, Table, Button, Card, CardBody, CardTitle } from "reactstrap";
import axios from "axios";
import "../assets/custom-calendar.css"; // 추가 커스텀 CSS

const CalendarTable = ({ year, month, onDateClick }) => {
  const [todoCount, setTodoCount] = useState({});

  useEffect(() => {
    const fetchTodoCount = async () => {
      try {
        const response = await axios.get("/api/todo/count", {
          params: { year, month: month + 1 }, // API에서 월은 1부터 시작
        });
        setTodoCount(response.data);
      } catch (error) {
        console.error("Error fetching todo count:", error);
      }
    };

    fetchTodoCount();
  }, [year, month]);

  const getCalendarDays = (year, month) => {
    const firstDayOfMonth = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const daysInPrevMonth = new Date(year, month, 0).getDate();

    const rows = [];
    let dayCounter = 1;
    let nextMonthCounter = 1;

    const firstRow = [];
    for (let i = 0; i < 7; i++) {
      if (i < firstDayOfMonth) {
        firstRow.push({
          day: daysInPrevMonth - (firstDayOfMonth - i - 1),
          isCurrentMonth: false,
        });
      } else {
        firstRow.push({ day: dayCounter++, isCurrentMonth: true });
      }
    }
    rows.push(firstRow);

    while (dayCounter <= daysInMonth) {
      const row = [];
      for (let i = 0; i < 7; i++) {
        if (dayCounter > daysInMonth) break;
        row.push({ day: dayCounter++, isCurrentMonth: true });
      }
      rows.push(row);
    }

    const lastRow = rows[rows.length - 1];
    while (lastRow.length < 7) {
      lastRow.push({ day: nextMonthCounter++, isCurrentMonth: false });
    }

    return rows;
  };

  const calendarDays = getCalendarDays(year, month);

  return (
      <Card className="calendar-container">
        <CardBody>
          <div className="d-flex justify-content-between align-items-center mb-3">
            <Button color="primary" onClick={() => onDateClick("prev")}>
              &lt; 이전 달
            </Button>
            <CardTitle tag="h5">
              {year}년 {month + 1}월
            </CardTitle>
            <Button color="primary" onClick={() => onDateClick("next")}>
              다음 달 &gt;
            </Button>
          </div>
          <Table className="calendar-table mt-3 align-middle" responsive>
            <thead>
            <tr>
              {["일", "월", "화", "수", "목", "금", "토"].map((day, index) => (
                  <th key={index} className="calendar-header">
                    {day}
                  </th>
              ))}
            </tr>
            </thead>
            <tbody>
            {calendarDays.map((week, weekIndex) => (
                <tr key={weekIndex}>
                  {week.map((date, dayIndex) => {
                    const formattedDate = `${year}-${String(month + 1).padStart(2, "0")}-${String(
                        date.day
                    ).padStart(2, "0")}`;
                    const isWeekend = dayIndex === 0 || dayIndex === 6;
                    return (
                        <td
                            key={dayIndex}
                            className={`calendar-cell ${!date.isCurrentMonth ? "disabled" : ""} ${
                                isWeekend ? (dayIndex === 0 ? "sunday" : "saturday") : ""
                            }`}
                            onClick={() => date.isCurrentMonth && onDateClick(formattedDate)}
                        >
                          {date.day}
                          {date.isCurrentMonth && todoCount[formattedDate] && (
                              <Badge color="info" className="badge-count">
                                {todoCount[formattedDate]}
                              </Badge>
                          )}
                        </td>
                    );
                  })}
                </tr>
            ))}
            </tbody>
          </Table>
        </CardBody>
      </Card>
  );
};

export default CalendarTable;
