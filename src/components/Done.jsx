import TodoItem from "./TodoItem";
import { useMemo } from "react";
import { memo } from "react";

const Done = memo(({ todoList, onClickHandle, markAsDone }) => {
    const renderedItems = useMemo(() => {
        return todoList.filter(item => item.isDone === true).map(item => {
            return <TodoItem 
                id={item.id}
                isDone={item.isDone}
                title={item.title}
                key={item.id}
                onClickHandle={onClickHandle}
                makeItemDone={markAsDone}
            />
        })
    }, [todoList, onClickHandle, markAsDone]); 
   

    return <div className="todo-box">
        {renderedItems}
    </div>
});

export default Done;