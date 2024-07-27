import React, { useState } from 'react';
import UploadFile from './UploadFile';
import FileList from './FileList';
import '../App.css';

const MainApp = () => {
  const [files, setFiles] = useState([]);

  const handleUpload = (newFile) => {
    setFiles([...files, newFile]);
  };

  const handleEdit = (updatedFile) => {
    setFiles(files.map(file => file.id === updatedFile.id ? updatedFile : file));
  };

  return (
    <div>
      <div className="banner">
        <h1>📁 Cloud Drive 🌥️</h1>
      </div>
      <div className="container">
        <h2>Upload and Manage Your Files</h2>
        <UploadFile onUpload={handleUpload} />
        <FileList files={files} onEdit={handleEdit} />
      </div>
    </div>
  );
};

export default MainApp;
