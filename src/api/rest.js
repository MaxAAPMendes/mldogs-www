
import axios from "axios";

const rest = axios.create({
  baseURL: process.env.NEXT_PUBLIC_URL_BASE_API || "http://localhost:5000/mldogs-backend/us-central1/app/",
  timeout: 10000,
});

export default rest;