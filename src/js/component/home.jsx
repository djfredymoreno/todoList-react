import React, { useState, useEffect } from "react";
import TaskForm from "./TaskForm.jsx";
import Task from "./task.jsx";

const Home = () => {
	const [taskList, setTaskList] = useState([]);

	const [error, setError] = useState(false);

	const newTask = task => {
		setTaskList([...taskList, task]);
		updateTasList([...taskList, task]);
	};

	const Delete = id => {
		const filterTask = taskList.filter((e, index) => index != id);
		setTaskList(filterTask);
		updateTasList(filterTask);
	};

	const updateTasList = updateNewList => {
		fetch("https://assets.breatheco.de/apis/fake/todos/user/fredy", {
			method: "PUT",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(updateNewList)
		});
	};

	const getDataFromServer = () => {
		fetch("https://assets.breatheco.de/apis/fake/todos/user/fredy", {
			method: "GET"
		})
			.then(resp => {
				return resp.json(); // (regresa una promesa) will try to parse the result as json as return a promise that you can .then for results
			})
			.then(data => {
				setTaskList(data);
			})
			.catch(error => {
				setError(true);
			});
	};

	useEffect(() => {
		getDataFromServer();
	}, []);

	return (
		<div>
			<h1 className="text-center mt-3">Lista de tareas</h1>
			<TaskForm newTask={newTask} />
			{!error ? (
				taskList.map((e, index) => {
					if (!e.done) {
						return <Task task={e} delete={Delete} id={index} />;
					}
				})
			) : (
				<h1 className="text-center">Error</h1>
			)}
		</div>
	);
};

export default Home;
