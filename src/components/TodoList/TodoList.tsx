import React, {useState} from "react";
import Todo from "./Todo";

function TodoList(props: any) {
  // const [todoList, setTodoList] = useState([] as string[]) ;
  // const [inputValue, setInputValue] = useState("");
  const [todoListState, setTodoListState] = useState({ todos: [] as string[], inputValue: '' as string, error: '' as string});

  const handleInputChange = (event: any) => {
    const { value } = event.target;

    setTodoListState({
      ...todoListState,
      inputValue: value
    });
  };

  const handleTodoAdd = () => {
    const {todos} = todoListState;

    if(!inputValue) return;

    if (todos.some((todo: string) => todo === inputValue )) {
      setTodoListState({
        ...todoListState,
        error: 'To zadanie już istnieje',
        inputValue: ''
      });

      return;
    }

    setTodoListState({
      todos: [...todos, inputValue],
      inputValue: '',
      error: ''
    })
  };

  const handleTodoRemove = (todoValue: string) => {
    setTodoListState({
      ...todoListState,
      todos: todos.filter(todo => todo !== todoValue)
    })
  }

  const {error, todos, inputValue} = todoListState;

  return (
    <div>
      <h2>
        Moja aplikacja TODO
      </h2>

      <input
        className="input"
        name="Todo Input"
        placeholder='Co będziemy dziś robić'
        value={inputValue}
        onChange={handleInputChange}
      />

      <button
        className="button"
        onClick={handleTodoAdd}
      >
        Dodaj
      </button>
      {!!error &&
        <p>
          {error}
        </p>
      }

      {todos.map((todo, key) => (
        <Todo
          className="todo-list"
          key={todo}
          todo={todo}
          keyName={key + 1}
          onCloseClick={() => handleTodoRemove(todo)}
        />
      ))}
    </div>
  )
}

export default TodoList;
