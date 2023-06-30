const reducerFunc = (state, action) => {
    if(action.type === 'add/todoAdd') {
      const newArray = [
        ...state,
        action.payload
      ];
      return newArray; 
    } else if (action.type === 'remove/RemoveElement') {
      const newArray = state.filter(todoItem => todoItem.id !== action.payload);
      return newArray;
    } else if (action.type === 'update/UpdateProcess') {
      const newArray = state.map(item => {
        if(item.id === action.payload) {
          return {
            ...item,
            isDone: !item.isDone
          }
        } else {
          return item;
        };
      });
      return newArray;
    };
};

export default reducerFunc;