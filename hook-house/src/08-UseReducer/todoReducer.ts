export const todoReducer = (initialState:any = [], action:any) =>{
    switch (action.type) {
        case '[TODO] Add Todo':            
            return [...initialState, action.payload]
            
    
        default:
            return initialState
    }
}