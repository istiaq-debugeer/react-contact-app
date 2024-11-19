import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:3066/"
});

export default api;