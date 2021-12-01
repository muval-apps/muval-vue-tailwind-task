/**
 * Axios Plugin implementing secured and plain axios requests
 */

 import axios from "axios";
 import router from '../router'
 
 const BASE_API_URL = 'http://api.muval.dev/api/v1'
 
 const axiosInstance = axios.create({
     baseURL: BASE_API_URL,
     withCredentials: true,
     headers: {
         'X-Request-With': 'XMLHttpRequest',
         'Content-Type': 'application/json',
     }
 });
 
 /*
  * Install global and Vue alias
  */
 window.axios = axiosInstance; // Make instance available globally as axios()
 
 export {
     axiosInstance as axios,
 }
 
 export default {
     install: (app, /*options*/) => {
         app.config.globalProperties.$axios = axiosInstance; // Make instance available as instance property this.$axios()
     }
 }