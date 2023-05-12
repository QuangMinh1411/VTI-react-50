import axios from "axios";

const baseUrl = "http://localhost:8080/api/students";

export const getAll = () => {
  return axios.get(baseUrl);
};

export const createStudent = (student) => {
  return axios.post(baseUrl + "/create", student);
};

export const updateStudent = (id, student) => {
  return axios.put(baseUrl + "/update/" + id, student);
};

export const deleteStudent = (id) => {
  return axios.delete(baseUrl + "/delete/" + id);
};

export const getStudent = (id) => {
  return axios.get(baseUrl + "/" + id);
};
