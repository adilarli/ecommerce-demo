import axios from "axios";

const BASE_API_URL = "https://nonchalant-fang.glitch.me";
const Services = axios.create({ baseURL: String(BASE_API_URL) });

export default Services;
