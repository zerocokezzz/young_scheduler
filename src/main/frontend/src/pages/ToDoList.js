import React, { useState, useEffect } from "react";
import { Row, Col, Card, CardBody, CardTitle, CardText, Button } from "reactstrap";
import { useNavigate } from "react-router-dom";
import { getAllTodos } from "../services/api";
import CalendarTable from "../components/CalendarTable";

const ToDoList = () => {
  const today = new Date();
  const [year, setYear] = useState(today.getFullYear());
  const [month, setMonth] = useState(today.getMonth());
  const [todos, setTodos] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const navigate = useNavigate();

  const colors = ["info", "success", "warning", "danger", "primary"];

  const getRandomColor = () => colors[Math.floor(Math.random() * colors.length)];

  // 모든 할 일 데이터를 가져오는 함수
  const fetchTodos = async () => {
    try {
      const response = await getAllTodos();
      setTodos(response.data);
    } catch (error) {
      console.error("Error fetching ToDo list:", error);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  // 필터링된 할 일 목록 반환
  const filteredTodos = todos.filter((todo) => {
    if (selectedDate) {
      // 특정 날짜 선택 시 해당 날짜의 할 일만 표시
      return todo.date === selectedDate;
    }
    // 날짜 선택 안 됐을 경우 해당 월의 모든 할 일 표시
    const todoDate = new Date(todo.date);
    return (
        todoDate.getFullYear() === year && todoDate.getMonth() === month
    );
  });

  // 날짜 또는 달 이동 클릭 처리 함수
  const handleDateClick = (actionOrDate) => {
    if (actionOrDate === "prev") {
      // 이전 달로 이동
      if (month === 0) {
        setMonth(11);
        setYear((prevYear) => prevYear - 1);
      } else {
        setMonth((prevMonth) => prevMonth - 1);
      }
      setSelectedDate(null); // 날짜 초기화
    } else if (actionOrDate === "next") {
      // 다음 달로 이동
      if (month === 11) {
        setMonth(0);
        setYear((prevYear) => prevYear + 1);
      } else {
        setMonth((prevMonth) => prevMonth + 1);
      }
      setSelectedDate(null); // 날짜 초기화
    } else {
      // 특정 날짜 선택
      setSelectedDate(actionOrDate);
    }
  };

  return (
      <div>
        <CalendarTable year={year} month={month} onDateClick={handleDateClick} />
        {filteredTodos.length === 0 ? (
            <div className="text-center mt-4">
              <h6>
                {selectedDate
                    ? `${selectedDate}에 할 일이 없습니다.`
                    : `${year}년 ${month + 1}월에 할 일이 없습니다.`}
              </h6>
              <p>새로운 할 일을 추가하세요!</p>
            </div>
        ) : (
            <Row className="mt-4">
              {filteredTodos.map((todo) => (
                  <Col md="6" lg="3" key={todo.id}>
                    <Card body color={getRandomColor()} inverse>
                      <CardBody>
                        <CardTitle tag="h5">{todo.title}</CardTitle>
                        <CardText>Due Date: {todo.date}</CardText>
                        <div className="d-flex justify-content-between">
                          <Button
                              color="light"
                              onClick={() => navigate(`/todo_detail/${todo.id}`)}
                          >
                            View
                          </Button>
                          <Button
                              color="danger"
                              onClick={() => console.log(`Delete ${todo.id}`)}
                          >
                            Delete
                          </Button>
                        </div>
                      </CardBody>
                    </Card>
                  </Col>
              ))}
            </Row>
        )}
      </div>
  );
};

export default ToDoList;
