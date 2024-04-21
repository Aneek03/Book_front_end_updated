import axios from "axios";

export const BASE_URL = "http://localhost:9090/api";
// export const BASE_URL = "https://apis.lcwdblogs.online/api/v1";
//"http://localhost:9090/api/v1"
export const myAxios = axios.create({
  baseURL: BASE_URL,
});

// Since we're not using JWT tokens anymore, we don't need a separate privateAxios instance
// with an interceptor for the Authorization header.






// import axios from "axios";
// import { getToken } from "../auth";

// export const BASE_URL = "http://localhost:9090/api/users";
// // export const BASE_URL = "https://apis.lcwdblogs.online/api/v1";
// //"http://localhost:9090/api/v1"
// export const myAxios = axios.create({
//   baseURL: BASE_URL,
// });

export const privateAxios = axios.create({
  baseURL: BASE_URL,
});

// privateAxios.interceptors.request.use(
//   (config) => {
//     const token = getToken();

//     if (token) {
//       config.headers.common.Authorization = `Bearer ${token}`;
//       // console.log(config);
//     }

//     return config;
//   },
//   (error) => Promise.reject(error)
// );
