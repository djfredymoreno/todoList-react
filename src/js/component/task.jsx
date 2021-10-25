import React from "react";

const Task = props => {
	const deleteTask = () => {
		props.delete(props.id);
	};

	return (
		<div>
			<div className="task text-center">
				<span className="ps-3 me-5 fs-2">{props.task}</span>
				<span onClick={deleteTask}>Borrar</span>
			</div>
		</div>
	);
};

export default Task;
