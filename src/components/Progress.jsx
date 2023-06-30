// Components
import TodoItem from "./TodoItem";
import { useMemo } from "react";
import { memo } from "react";

const Progress = memo(({ todoList, markAsDone, onClickHandle }) => {
    const renderedItems = useMemo(() => {
        return todoList.map(item => {
            if(item.isDone === false) {
                return  <TodoItem 
                    id={item.id}
                    isDone={item.isDone}
                    title={item.title}
                    key={item.id}
                    onClickHandle={onClickHandle}
                    makeItemDone={markAsDone}
                />
            }
        })
    }, [todoList, markAsDone, onClickHandle]);

    return <div className="todo-box">
        {renderedItems}
    </div>
});

export default Progress;