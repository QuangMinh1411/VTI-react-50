import axios from "axios";
export const ENDPOINT = "http://localhost:8080/api/v1/cars";

const carApi = {
  getAllCar() {
    return axios.get(ENDPOINT);
  },
  getCar(id) {
    return axios.get(`${ENDPOINT}/${id}`);
  },
  saveCar(file, model, maker) {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("model", model);
    formData.append("maker", maker);
    return axios.post(ENDPOINT, formData, {
      headers: {
        "Content-Type": "form-data",
      },
    });
  },
  updateCar(id, car) {
    return axios.put(`${ENDPOINT}/update/${id}`, car);
  },
  deleteCar(id) {
    return axios.delete(`${ENDPOINT}/${id}`);
  },
};
export default carApi;
