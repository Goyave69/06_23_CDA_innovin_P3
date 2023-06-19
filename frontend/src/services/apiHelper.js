import axios from "axios";

const ApiHelper = async (
  route,
  method,
  data = null,
  format = "application/json"
) => {
  return axios({
    method,
    url: `http://localhost:5000/${route}`,
    data,
    headers: {
      "content-type": format,
      Accept: "application/json",
    },
  });
};

export default ApiHelper;
