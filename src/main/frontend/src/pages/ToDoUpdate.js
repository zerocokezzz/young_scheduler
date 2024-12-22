import React, { useState, useEffect } from "react";
import {
  Card,
  Row,
  Col,
  CardTitle,
  CardBody,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Alert,
  Spinner,
} from "reactstrap";
import { useParams } from "react-router-dom";
import { getTodoById, updateTodo } from "../services/api"; // 정확한 이름으로 import

const ToDoUpdate = () => {
  const { id } = useParams(); // URL에서 ID 추출
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [description, setDescription] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  // Fetch data from the server
  useEffect(() => {
    const fetchToDo = async () => {
      try {
        const response = await getTodoById(id); // 정확한 API 호출
        const { title, date, time, description } = response.data;

        setTitle(title || "");
        setDate(date || "");
        setTime(time || "");
        setDescription(description || "");
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching ToDo:", error);
        setErrorMessage("Failed to load ToDo. Please try again.");
        setIsLoading(false);
      }
    };

    if (id) {
      fetchToDo();
    }
  }, [id]);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const toDoDTO = {
      title,
      date,
      time,
      description,
    };

    try {
      // Call backend API to update ToDo
      await updateTodo(id, toDoDTO); // 정확한 API 호출
      setSuccessMessage("ToDo updated successfully!");
      setErrorMessage("");
    } catch (error) {
      console.error("Error updating ToDo:", error);
      setErrorMessage("Failed to update ToDo. Please try again.");
      setSuccessMessage("");
    }
  };

  if (isLoading) {
    return (
      <div className="text-center">
        <Spinner color="primary" />
      </div>
    );
  }

  return (
    <Row>
      <Col>
        <Card>
          <CardTitle tag="h6" className="border-bottom p-3 mb-0">
            <i className="bi bi-pencil-square me-2"> </i>
            Update ToDo
          </CardTitle>
          <CardBody>
            {errorMessage && <Alert color="danger">{errorMessage}</Alert>}
            <Form onSubmit={handleSubmit}>
              <FormGroup>
                <Label for="title">Title</Label>
                <Input
                  id="title"
                  name="title"
                  placeholder="Enter title"
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                />
              </FormGroup>
              <FormGroup>
                <Label for="date">Date</Label>
                <Input
                  id="date"
                  name="date"
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  required
                />
              </FormGroup>
              <FormGroup>
                <Label for="time">Time</Label>
                <Input
                  id="time"
                  name="time"
                  type="time"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                />
              </FormGroup>
              <FormGroup>
                <Label for="description">Description</Label>
                <Input
                  id="description"
                  name="description"
                  type="textarea"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </FormGroup>
              <Button color="primary" type="submit">
                Submit
              </Button>
            </Form>
            {successMessage && (
              <Alert color="success" className="mt-3">
                {successMessage}
              </Alert>
            )}
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default ToDoUpdate;
