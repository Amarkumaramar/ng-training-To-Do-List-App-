// src/components/TaskTable.js
import React from 'react';
import './TaskTable.js';

const TaskTable = ({ tasks, handleEdit, handleDelete }) => {
  return (
    <table className="task-table">
      <thead>
        <tr>
          <th></th>
          <th>Assigned To</th>
          <th>Status</th>
          <th>Due Date</th>
          <th>Priority</th>
          <th>Comments</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {tasks.map((task) => (
          <tr key={task.id}>
            <td><input type="checkbox" /></td>
            <td>{task.assignedTo}</td>
            <td>{task.status}</td>
            <td>{task.dueDate}</td>
            <td>{task.priority}</td>
            <td>{task.comments}</td>
            <td>
              <button className="edit-btn" onClick={() => handleEdit(task.id)}>Edit</button>
              <button className="delete-btn" onClick={() => handleDelete(task.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TaskTable;
