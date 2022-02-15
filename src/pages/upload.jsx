import React, { useState } from "react";

const Upload = () => {
  const key = 'e88bd2e1-ba73-45b1-87f3-9b2c6e4b7a4a';
  const url = 'https://api.thecatapi.com/v1/images/upload'
  const [selectedFile, setSelectedFile] = useState()
  const [error, setError] = useState(false);


  const onChange = (e) => {
    setSelectedFile(e.target.files[0])
  }
  const uploadImage = async () => {
    const formData = new FormData()
    formData.append('file', selectedFile)
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        Accept: "application/json",
        'x-api-key': key
      },
      body: formData
    })
    if (response.status === 200) {
      console.log("works")
    } else {
      setError(true);
      setTimeout(() => setError(false), 3000);
    }
  }
  return (
    <div className="container">
      <div className="row p-3 m-3 align-items-center border border-succesrounded-pill">
        <div className="col-sm-8">
          <input onChange={onChange} type="file" className="form-control my-3" id="formFile" />
        </div>
        <div className="col-sm-4">
          <button onClick={uploadImage} type="button" className="btn btn-primary" > Upload </button>
        </div>
      </div>
      {
        error && <h3>Error</h3>
      }
    </div>
  )
};

export default Upload;
