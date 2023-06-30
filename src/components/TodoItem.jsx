import { memo } from 'react';
// icons
import {BiTrashAlt} from 'react-icons/bi';
import {AiOutlineCheck} from 'react-icons/ai';

const TodoItem = memo(({ title, isDone, id, onClickHandle, makeItemDone }) => {
    const handleDelete = () => {
        onClickHandle(id);
    };
    const handleRestore = () => {

    };
    const markAsDone = () => {
        makeItemDone(id);
    };


    return (
        <div className="todo-item">
            <p 
                style={{
                    textDecoration: isDone ? 'line-through' : 'none'
                }}
            >
                {title}
            </p>
            <div>
                {
                    isDone ? <button onClick={markAsDone}>Restore</button> : <div className='todoItemOptions'>
                        <AiOutlineCheck onClick={markAsDone} />
                        <BiTrashAlt onClick={handleDelete} />     
                    </div>
                }            
            </div>
        </div>
    )
});  

export default TodoItem;
