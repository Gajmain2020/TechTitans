import axios from "axios";

const URL = "http://localhost:3002/api/user";

export async function sighUpUser(data) {
  try {
    const response = await axios({
      url: URL + "/signup",
      method: "POST",
      data,
    });
    return response.data;
  } catch (error) {
    return error.response.message;
  }
}
