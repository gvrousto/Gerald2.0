import { API_URL } from "../config";


export function apiGet(endpoint) {
  const HEADERS = {
    Accept: "application/json",
    "Content-Type": "application/json",
    token: localStorage.getItem("token")
  };
  var result = fetch(`${API_URL}${endpoint}/`, { headers: HEADERS })
    .then(res => res.json())
    .catch(function(error) {
      return error;
    });
    return result;
}
