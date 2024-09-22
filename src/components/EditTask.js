import React, { useState } from 'react';
import './EditTask.js';

function EditTask({ taskData = {}, handleSave, handleCancel }) {
  // Initialize task state with default values if taskData is empty
  const [task, setTask] = useState({
    assignedTo: taskData.assignedTo || '',
    status: taskData.status || '',
    dueDate: taskData.dueDate || '',
    priority: taskData.priority || '',
    comments: taskData.comments || '',
  });

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.assignedTo && task.status && task.dueDate && task.priority && task.comments) {
      handleSave(task);  // Pass the task to the parent component
    } else {
      alert('Please fill out all fields.');
    }
  };

  return (
    <div className="edit-task-form">
      <h2>Edit Task</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Assigned To:</label>
          <select name="assignedTo" value={task.assignedTo} onChange={handleChange} required>
            <option value="">Select User</option>
            <option value="User1">User1</option>
            <option value="User2">User2</option>
            <option value="User3">User3</option>
            <option value="User4">User4</option>
          </select>
        </div>
        <div className="form-group">
          <label>Status:</label>
          <select name="status" value={task.status} onChange={handleChange} required>
            <option value="">Select Status</option>
            <option value="Pending">Pending</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
          </select>
        </div>
        <div className="form-group">
          <label>Due Date:</label>
          <input
            type="date"
            name="dueDate"
            value={task.dueDate}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Priority:</label>
          <select name="priority" value={task.priority} onChange={handleChange} required>
            <option value="">Select Priority</option>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </div>
        <div className="form-group">
          <label>comments:</label>
          <textarea
            name="comments"
            value={task.comments}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-buttons">
          <button type="button" className="cancel-btn" onClick={handleCancel}>
            Cancel
          </button>
          <button type="submit" className="save-btn">
            Save
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditTask;
