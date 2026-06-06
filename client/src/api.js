import axios from "axios";

const API = axios.create({
  baseURL: "https://contact-manager-backend.vercel.app/api/contacts",
});

export default API;
// baseURL: "http://localhost:5000/api/contacts"