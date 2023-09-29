import React, { useState } from 'react';

function Complaint() {
  const [complaint, setComplaint] = useState({
    name: '',
    email: '',
    title: '',
    description: ''
  });
  const [submittedComplaint, setSubmittedComplaint] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setComplaint({
      ...complaint,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedComplaint(complaint);
    setComplaint({
      name: '',
      email: '',
      title: '',
      description: ''
    });
  };

  return (
    <div className="App">
      <h1>Complaint Box</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={complaint.name}
          onChange={handleInputChange}
        />
        <br />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={complaint.email}
          onChange={handleInputChange}
        />
        <br />
        <input
          type="text"
          name="title"
          placeholder="Complaint Title"
          value={complaint.title}
          onChange={handleInputChange}
        />
        <br />
        <textarea
          name="description"
          placeholder="Complaint Description"
          value={complaint.description}
          onChange={handleInputChange}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
      {submittedComplaint && (
        <div>
          <h2>Submitted Complaint:</h2>
          <p>Name: {submittedComplaint.name}</p>
          <p>Email: {submittedComplaint.email}</p>
          <p>Title: {submittedComplaint.title}</p>
          <p>Description: {submittedComplaint.description}</p>
        </div>
      )}
    </div>
  );
}

export default Complaint;