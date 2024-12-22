import axios from 'axios';

const API_BASE_URL = "/api/todo";

// 모든 ToDo 조회
export const getAllTodos = async () => {
    return await axios.get(API_BASE_URL);
};

// 특정 ToDo 조회
export const getTodoById = async (id) => {
    return await axios.get(`${API_BASE_URL}/${id}`);
};

// ToDo 생성
export const createToDo = async (todo) => {
    return await axios.post(`${API_BASE_URL}`, todo);
};

// ToDo 업데이트
export const updateTodo = async (id, todo) => {
    return await axios.put(`${API_BASE_URL}/${id}`, todo);
};

// ToDo 삭제
export const deleteTodo = async (id) => {
    return await axios.delete(`${API_BASE_URL}/${id}`);
};
