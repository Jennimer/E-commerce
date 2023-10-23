import axios from "axios";

const BASE_URL = `${process.env.BACK_URL}/api/`;
//const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZjMwNjMxNWVmZmM4ODI3N2Y2ZDYxNSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY5MzY0OTY5NCwiZXhwIjoxNjkzOTA4ODk0fQ.2CVARNC5zYqq6whBxycdjp0cI_W6j4qtbt6YqdWRQaw";

const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
const currentUser = user && JSON.parse(user).currentUser;
const TOKEN = currentUser?.accessToken;


export const publicRequest = axios.create({
    baseURL: BASE_URL,
})

export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers: { token: `Beaver ${TOKEN}` }
});