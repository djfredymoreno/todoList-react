import React, { useState } from "react";
import TaskForm from "./TaskForm.jsx";
import Task from "./task.jsx";

const Home = () => {
	const [taskList, setTaskList] = useState([]);

	const newTask = task => {
		setTaskList([task, ...taskList]);
	};

	const Delete = id => {
		const filterTask = taskList.filter((e, index) => index != id);
		setTaskList(filterTask);
	};

	return (
		<div>
			<h1 className="text-center mt-3">Lista de tareas</h1>
			<TaskForm newTask={newTask} />
			{taskList.map((e, index) => (
				<Task task={e} delete={Delete} id={index} />
			))}
		</div>
	);
};

export default Home;
