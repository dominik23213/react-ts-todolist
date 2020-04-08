import * as React from "react";

function Todo(props: any) {
	const {keyName, todo, onCloseClick} = props;
	return (
		<div className="todo">
			<span>{keyName}. {todo}</span>
			<button
				className="close"
				onClick={onCloseClick}
			>
				x
			</button>
		</div>
	)
}

export default Todo;
