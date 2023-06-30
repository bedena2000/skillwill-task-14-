import { useReducer, useState } from 'react'
import './App.css'
import { useCallback } from 'react';

// components
import Done from './components/Done';
import Progress from './components/Progress';
import TodoInput from './components/TodoInput';

// Utils
import reducerFunc from './utils/reducerFunc';
import initialValue from './utils/initialValue';

// Reducer Initial

function App() {
  const [todoList, dispatch] = useReducer(reducerFunc, initialValue);
  const [isDone, setIsDone] = useState(false);

  const handleInputClickSubmit = useCallback((inputValue) => {
    if(inputValue.trim()) {
      const inputValueTrimmed = inputValue.trim();
      
      const newItem = {
        title: inputValueTrimmed,
        isDone: false,
        id: Math.random()
      };
      
      const newAction = {
         type: 'add/todoAdd',
         payload: newItem
      };

      dispatch(newAction);
    };
  }, [todoList]);

  const onClickHandle = useCallback((inputId) => {
    dispatch({
      type: 'remove/RemoveElement',
      payload: inputId
    })
  }, [todoList]);

  const markAsDone = useCallback((inputId) => {
    dispatch({
      type: 'update/UpdateProcess',
      payload: inputId
    })
  }, [todoList]);


  return (
    <>
      <div className="todo-wrapper" style={{
        overflow: "auto"
      }}>
        <TodoInput inputHandle={handleInputClickSubmit} />
        <div className='todo-titles'>
          <p onClick={() => setIsDone(false)}>შესასრულებელი</p>
          <p onClick={() => setIsDone(true)}>შესრულებული</p>
        </div>
        {
          isDone ? <Done onClickHandle={onClickHandle} todoList={todoList} markAsDone={markAsDone} /> : <Progress onClickHandle={onClickHandle} markAsDone={markAsDone} todoList={todoList} />
        }
      </div>
    </>
  )
}

export default App
