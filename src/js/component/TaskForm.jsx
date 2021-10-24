import React, { useState } from "react";

const TaskForm = props => {
	const [inputText, setInputText] = useState("");
	const [validation, setValidation] = useState(true);

	//capturamos el evento cada vez q pulsemos una tecla del input
	const handleForm = e => {
		setInputText(e.target.value);
	};

	//con este evento evitamos que la página no se actualice
	const submit = e => {
		e.preventDefault();
		if (inputText.trim() != "") {
			props.newTask(inputText);
			setInputText("");
			setValidation(true);
		} else {
			setValidation(false);
		}
	};

	return (
		<form onSubmit={submit}>
			<input
				type="text"
				placeholder="Añadir tarea"
				value={inputText}
				onChange={handleForm}
			/>
			<button>+</button>

			{!validation && <div className="validation">Añadir una tarea</div>}
		</form>
	);
};

export default TaskForm;
