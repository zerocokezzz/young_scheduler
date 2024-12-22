import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getTodoById } from "../services/api"; // 정확한 이름으로 import
import { Card, CardBody, CardTitle, CardText, Button } from "reactstrap";

const ToDoDetails = () => {
  const { id } = useParams(); // URL에서 ID 추출
  const navigate = useNavigate();
  const [todo, setTodo] = useState(null);

  useEffect(() => {
    const fetchTodo = async () => {
      try {
        const response = await getTodoById(id); // API 호출
        setTodo(response.data);
      } catch (error) {
        console.error("Error fetching ToDo details:", error);
      }
    };
    fetchTodo();
  }, [id]);

  if (!todo) return <p>Loading...</p>;

  return (
    <Card>
      <CardBody>
        <CardTitle tag="h5">{todo.title}</CardTitle>
        <CardText>Date: {todo.date}</CardText>
        <CardText>Time: {todo.time || "N/A"}</CardText>
        <CardText>Description: {todo.description || "No description"}</CardText>
        <div>
          <Button
            onClick={() => navigate("/todo_list")}
            color="secondary"
            className="me-2"
          >
            Back to List
          </Button>
          <Button
            onClick={() => navigate(`/todo_update/${id}`)}
            color="primary"
          >
            Update ToDo
          </Button>
        </div>
      </CardBody>
    </Card>
  );
};

export default ToDoDetails;
