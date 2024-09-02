import axios from "axios";

const app = axios.create({
    baseURL,
    withCredentials: true,
});

const http = {
    get: app.get,
    post: app.post,
    put: app.put,
    delete: app.delete,
}

export default http;