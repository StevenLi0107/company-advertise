import Axios from 'axios';
import { API_URL } from '../utils/constans';
/**
 * Create a request cancel token
 */
const CancelToken = Axios.CancelToken;
/**
 * Creates an instance of
 * axios that always uses the eatup api
 * base route
 */
const http = Axios.create({
  baseURL: API_URL,
  withCredentials: true,
  cancelToken: CancelToken.source().token,
});

export default http;
