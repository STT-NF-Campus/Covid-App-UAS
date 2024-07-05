const BASE_URL = import.meta.env.VITE_API_URL;

const ENDPOINTS = {
    GLOBAL: `${BASE_URL}/global.json`,
    INDONESIA: `${BASE_URL}/indonesia.json`,
}

export default ENDPOINTS;