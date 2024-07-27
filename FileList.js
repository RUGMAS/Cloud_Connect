import React from 'react';
import EditFile from './EditFile';  // Ensure EditFile.js exists in the same directory
import '../App.css';

const FileList = ({ files, onEdit }) => {
  return (
    <div>
      <h3>File List</h3>
      <ul>
        {files.map(file => (
          <li key={file.id}>
            {file.name}
            <button onClick={() => onEdit(file)}>Edit</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FileList;
