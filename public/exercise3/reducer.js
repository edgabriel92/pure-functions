let initialState = {
	todos: [
		{
			text: "Take out the trash",
			isComplete: false
		}
	]
};


// This reducer isn't pure! Fix it plz
const reducer = (state = initialState, action) => {
	let stateCopy = {
		...state,
		todos: state.todos.map((currentItem)=> {
			return {...currentItem}
		})
	}

	if (action.type == "ADD_TODO") {
		stateCopy.todos.push({
			text: action.todoText,
			isComplete: false
		});
		return stateCopy;
	} else if (action.type == "TOGGLE_TODO") {
		let todoToToggle = stateCopy.todos[action.todoIndex];
		todoToToggle.isComplete = !todoToToggle.isComplete;
		return stateCopy;
	} else {
		return state;
	}
}
