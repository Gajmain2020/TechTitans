import axios from "axios";

const URL = "http://localhost:3002/api/borrower";

const headers = {
  "content-type": "application/json",
  authorization:
    localStorage.getItem("data") &&
    `Bearer ${JSON.parse(localStorage.getItem("data")).authToken}`,
};

export async function postRequirement(data) {
  console.log(data);
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

export async function fetchSinglePost(data) {
  try {
    const response = await axios({
      url: URL + "/fetch-single-post?id=" + data,
      method: "GET",
    });
    return response.data;
  } catch (error) {
    return error.response.data;
  }
}

export async function addComment(comment, id, name, postId) {
  try {
    const response = await axios({
      url: URL + `/comment?id=${postId}`,
      method: "PATCH",
      data: {
        comment,
        id,
        name,
      },
    });

    return response.data;
  } catch (error) {
    return error.response.data;
  }
}
