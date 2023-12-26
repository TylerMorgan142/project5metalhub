import axios from "axios";

axios.defaults.baseURL = "https://metalhub-api-7e3be8a93e64.herokuapp.com/";
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
axios.defaults.withCredentials = true;