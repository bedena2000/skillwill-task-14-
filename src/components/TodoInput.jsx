import { useState } from 'react';
import { IoMdAdd } from 'react-icons/io';

const TodoInput = ({ inputHandle }) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputSubmit = () => {
        inputHandle(inputValue);
    };

    return (
        <div className='todo-input'>
            <input type="text" 
                value={inputValue}
                onChange={(event) => setInputValue(event.target.value)}
            />
            <div onClick={handleInputSubmit}>
                <IoMdAdd />
            </div>
        </div>
    )
};

export default TodoInput;
