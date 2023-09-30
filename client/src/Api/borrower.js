import axios from "axios";

const URL = "http://localhost:3002/api/borrower";

const headers = {
  "content-type": "application/json",
  authorization:
    localStorage.getItem("data") &&
    `Bearer ${JSON.parse(localStorage.getItem("data")).authToken}`,
};

export async function postRequirement(data) {
  try {
    const response = await axios({
      headers,
      url: URL + "/post-requirement",
      method: "POST",
      data,
    });
    return response.data;
  } catch (error) {
    return error.response.data;
  }
}
