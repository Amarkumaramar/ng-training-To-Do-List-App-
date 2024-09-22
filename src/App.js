
// src/App.js
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import TaskTable from './components/TaskTable';
import Footer from './components/Footer';
import EditTask from './components/EditTask';
import DeleteTask from './components/DeleteTask';
import NewTask from './components/NewTask';
import '@fortawesome/fontawesome-free/css/all.css';

import './styles.css';

const initialTasks = [
  { id: 1, assignedTo: 'User1', status: 'Completed', dueDate: '2024-10-12', priority: 'Low', comments: 'The task is good' },
  { id: 2, assignedTo: 'User2', status: 'In Progress', dueDate: '2024-09-14', priority: 'High', comments: 'The task is good ' },
  { id: 2, assignedTo: 'User2', status: 'Not Started', dueDate: '2024-08-18', priority: 'Low', comments: 'The task is good' },
  { id: 2, assignedTo: 'User2', status: 'In Progress', dueDate: '2024-10-05', priority: 'Normal', comments: 'The task is good' },
  { id: 2, assignedTo: 'User2', status: 'Not Started', dueDate: '2024-06-10', priority: 'Medium', comments: 'The task is good' },
];

function App() {
  const [tasks, setTasks] = useState(initialTasks);
  const [page, setPage] = useState(1);
  const [editingTask, setEditingTask] = useState(null);
  const [deletingTask, setDeletingTask] = useState(null);
  const [showNewTask, setShowNewTask] = useState(false);

  const handleNewTask = () => setShowNewTask(true);
  const handleSaveNewTask = (newTask) => {
    setTasks([...tasks, { ...newTask, id: tasks.length + 1 }]);
    setShowNewTask(false);
  };
  const handleEditTask = (id) => setEditingTask(tasks.find((task) => task.id === id));
  const handleSaveEditTask = (updatedTask) => {
    setTasks(tasks.map((task) => (task.id === editingTask.id ? updatedTask : task)));
    setEditingTask(null);
  };
  const handleDeleteTask = (id) => setDeletingTask(tasks.find((task) => task.id === id));
  const handleConfirmDelete = () => {
    setTasks(tasks.filter((task) => task.id !== deletingTask.id));
    setDeletingTask(null);
  };

  const handleCancel = () => {
    setEditingTask(null);
    setDeletingTask(null);
    setShowNewTask(false);
  };

  const handleFirst = () => setPage(1);
  const handlePrev = () => setPage((prevPage) => Math.max(prevPage - 1, 1));
  const handleNext = () => setPage((prevPage) => Math.min(prevPage + 1, Math.ceil(tasks.length / 5)));
  const handleLast = () => setPage(Math.ceil(tasks.length / 5));

  return (
    <div className="app">
      <Navbar taskCount={tasks.length} handleNewTask={handleNewTask} />
      <div className="content">
        {!editingTask && !deletingTask && !showNewTask && (
          <>
            <TaskTable tasks={tasks} handleEdit={handleEditTask} handleDelete={handleDeleteTask} />
            <Footer page={page} totalPages={Math.ceil(tasks.length / 5)} handleFirst={handleFirst} handlePrev={handlePrev} handleNext={handleNext} handleLast={handleLast} />
          </>
        )}
        {editingTask && <EditTask task={editingTask} handleCancel={handleCancel} handleSave={handleSaveEditTask} />}
        {deletingTask && <DeleteTask task={deletingTask} handleCancel={handleCancel} handleConfirmDelete={handleConfirmDelete} />}
        {showNewTask && <NewTask handleCancel={handleCancel} handleSave={handleSaveNewTask} />}
      </div>
    </div>
  );
}

export default App;
