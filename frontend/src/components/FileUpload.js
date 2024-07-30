import React, { useState } from 'react';
import axios from 'axios';

function FileUpload({ onSummary }) {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);

    try {
      const uploadResponse = await axios.post("/upload", formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      const { filename } = uploadResponse.data;
      const summaryResponse = await axios.post("/summarize", { file_name: filename });

      onSummary(summaryResponse.data.summary);
    } catch (error) {
      console.error("Error uploading or summarizing file:", error);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload and Summarize</button>
    </div>
  );
}

export default FileUpload;
