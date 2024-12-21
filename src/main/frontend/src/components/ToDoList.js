import React, { useState, useEffect } from "react";
import { Row, Col, Card, CardBody, CardTitle, CardText, Button } from "reactstrap";
import { useNavigate } from "react-router-dom";
import { getAllTodos, deleteTodo } from "../services/api";
import CalendarTable from "./CalendarTable";

const ToDoList = () => {
  const [todos, setTodos] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const navigate = useNavigate();

  // 랜덤 색상 배열
  const colors = ["info", "success", "warning", "danger", "primary"];

  // 랜덤 색상 선택 함수
  const getRandomColor = () => colors[Math.floor(Math.random() * colors.length)];

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

  const filteredTodos = selectedDate
      ? todos.filter((todo) => todo.date === selectedDate)
      : todos;

  const handleViewDetails = (id) => {
    navigate(`/todo_detail/${id}`);
  };

  return (
      <div>
        <CalendarTable
            year={new Date().getFullYear()}
            month={new Date().getMonth()}
            onDateClick={setSelectedDate}
        />
        {filteredTodos.length === 0 ? (
            <div className="text-center mt-4">
              <h6>{selectedDate ? `${selectedDate}에 할 일이 없습니다.` : "할 일이 없습니다."}</h6>
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
                          <Button color="light" onClick={() => handleViewDetails(todo.id)}>
                            View
                          </Button>
                          <Button color="danger" onClick={() => console.log(`Delete ${todo.id}`)}>
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
