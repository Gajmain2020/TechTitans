import React from "react";

function PostDetails({ postData }) {
  return (
    <div>
      <div>this is post details title:{postData.borrowingTitle}</div>
      <div>this is post details title:{postData.borrowerName}</div>
      <div>this is post details title:{postData.amountRequired}</div>
      <div>period:{postData.period}</div>
      <div>description:{postData.borrowingDescription}</div>
    </div>
  );
}

export default PostDetails;
