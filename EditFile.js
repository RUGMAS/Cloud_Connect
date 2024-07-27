import React, { useState } from 'react';

const EditFile = ({ file, onSave }) => {
  const [name, setName] = useState(file.name);

  const handleSave = () => {
    onSave({ ...file, name });
  };

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handleSave}>Save</button>
    </div>
  );
};

export default EditFile;
