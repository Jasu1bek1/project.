import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask,  } from './tasksSlice';

const TaskForm = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      dispatch(addTask(text));
      setText('');
    }
  };

  return (
    <div className="task-form">
      <form onSubmit={handleSubmit}>
        <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Добавить новый текст🫶🏻" />
        <button className='sumbyt'>Добавить текст</button>
      </form>
      <div className="filters">

      </div>
    </div>
  );
};

export default TaskForm;
