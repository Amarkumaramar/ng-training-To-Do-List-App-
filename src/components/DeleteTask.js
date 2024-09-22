// src/components/DeleteTask.js
import React from 'react';
import './DeleteTask.js';

const DeleteTask = ({ task, handleCancel, handleConfirmDelete }) => {
  return (
    <div className="delete-task">
      <h2>Delete</h2>
      <p>Do you want to delete task "{task.assignedTo}"?</p>
      <div className="delete-buttons">
        <button id='btn1' onClick={handleCancel}>No</button>
        <button id='btn2' onClick={handleConfirmDelete}>Yes</button>
      </div>
    </div>
  );
};

export default DeleteTask;
