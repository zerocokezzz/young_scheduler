import React, { useState } from "react";
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
} from "reactstrap";
import { createToDo } from "../services/api";

const ToDoForm = () => {
    const [title, setTitle] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [description, setDescription] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const toDoDTO = { title, date, time, description };

        try {
            const response = await createToDo(toDoDTO);
            setSuccessMessage(`ToDo saved successfully! ID: ${response.data}`);
            setErrorMessage("");
            setTitle("");
            setDate("");
            setTime("");
            setDescription("");
        } catch (error) {
            console.error("Error saving ToDo:", error);
            setErrorMessage("Failed to save ToDo. Please try again.");
            setSuccessMessage("");
        }
    };

    return (
        <Row>
            <Col>
                <Card>
                    <CardTitle tag="h6" className="border-bottom p-3 mb-0">
                        <i className="bi bi-bell me-2"></i>Create ToDo
                    </CardTitle>
                    <CardBody>
                        <Form onSubmit={handleSubmit}>
                            <FormGroup>
                                <Label for="title">Title</Label>
                                <Input
                                    id="title"
                                    name="title"
                                    placeholder="제목 입력"
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
                                    placeholder="설명 입력"
                                    type="textarea"
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                />
                            </FormGroup>
                            <Button color="primary" type="submit">
                                Save
                            </Button>
                        </Form>
                        {successMessage && (
                            <Alert color="success" className="mt-3">
                                {successMessage}
                            </Alert>
                        )}
                        {errorMessage && (
                            <Alert color="danger" className="mt-3">
                                {errorMessage}
                            </Alert>
                        )}
                    </CardBody>
                </Card>
            </Col>
        </Row>
    );
};

export default ToDoForm;
