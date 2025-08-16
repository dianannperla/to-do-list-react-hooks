import React, { useState } from 'react';

const TodoForm = ({ addTodo }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue) {
      addTodo({ text: inputValue, completed: false });
      setInputValue('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={inputValue} 
        onChange={(e) => setInputValue(e.target.value)} 
        placeholder="Thêm công việc mới..."
      />
      <button type="submit">Thêm</button>
    </form>
  );
};

export default TodoForm;