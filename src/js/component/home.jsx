import React, { useState } from "react";
import TaskForm from "./TaskForm.jsx";

const Home = () => {
	const [taskList, setTaskList] = useState([]);

	const newTask = task => {
		setTaskList([task, ...taskList]);
	};

	return (
		<div className="container-fluid">
			<TaskForm newTask={newTask} />
			{taskList.map(e => (
				<div>{e}</div>
			))}
		</div>
	);
};

export default Home;
