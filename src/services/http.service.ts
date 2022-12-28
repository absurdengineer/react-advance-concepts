import axios from "axios";

axios.defaults.baseURL = "https://api.instantwebtools.net/v1";

const httpService = {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  patch: axios.patch,
  delete: axios.delete,
};

export default httpService;
