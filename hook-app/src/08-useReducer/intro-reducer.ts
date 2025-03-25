const initialState = [{
    id: 1,
    title: 'Recolectar la prieda del Alma',
    done: false
}]

const todoReducer = (state = initialState, action:any = {}) =>{

    if(action.type === '[TODO] Add Todo'){
        return [...state, action.payload]
    }
    return state;
    
}


let todos = todoReducer();


const newTodo = ({
    id: 2,
    title: 'Recolectar la prieda del Alma',
    done: false
})

const addTodoAction = {
    type: '[TODO] Add Todo',
    payload: newTodo
}

todos = todoReducer( todos, addTodoAction)

console.log({states: todos});

/* todos.push({
    id: 2,
    title: 'Recolectar la prieda del Alma',
    done: false
}) */