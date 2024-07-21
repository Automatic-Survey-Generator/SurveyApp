'use client';

import React, { useState, useCallback } from 'react';

// InputComponent definition
const InputComponent: React.FC<{
  index: number;
  name: string;
  value: string | number;
  onChange: (index: number, event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
}> = React.memo(({ index, name, value, onChange, placeholder }) => {
  console.log(`Rendering input ${name} at index ${index}`);
  return (
    <input
      type={name === 'age' ? 'number' : name === 'email' ? 'email' : 'text'}
      name={name}
      value={value}
      onChange={(event) => onChange(index, event)}
      placeholder={placeholder}
    />
  );
});

// FormComponent definition
const FormComponent: React.FC = () => {
  const [formData, setFormData] = useState([
    { name: '', email: '', age: '' }
  ]);

  const handleChange = useCallback((index: number, event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData(prevFormData => {
      const newFormData = [...prevFormData];
      newFormData[index][name] = value;
      return newFormData;
    });
  }, []);

  const handleAddRow = () => {
    setFormData([...formData, { name: '', email: '', age: '' }]);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log('Form Data:', formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      {formData.map((data, index) => (
        <div key={index}>
          <InputComponent
            index={index}
            name="name"
            value={data.name}
            onChange={handleChange}
            placeholder="Name"
          />
          <InputComponent
            index={index}
            name="email"
            value={data.email}
            onChange={handleChange}
            placeholder="Email"
          />
          <InputComponent
            index={index}
            name="age"
            value={data.age}
            onChange={handleChange}
            placeholder="Age"
          />
        </div>
      ))}
      <button type="button" onClick={handleAddRow}>
        Add Row
      </button>
      <button type="submit">Submit</button>
    </form>
  );
};


export default FormComponent;