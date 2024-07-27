import React, { useState } from 'react';
import '../App.css';

const UploadFile = ({ onUpload }) => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = () => {
    // Implement upload logic here (e.g., API call)
    onUpload(file);
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button className="button" onClick={handleUpload}>Upload</button>
    </div>
  );
};

export default UploadFile;
