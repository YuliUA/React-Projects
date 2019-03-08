
const initialState={
    toDoList:[{
        id: 1,
        task: 'Buy food for dinner'
    },{
        id:2,
        task: 'Call Mrs. Smith'
    }],
    newTask: '',
    newId: ''
}

const reducer = (state=initialState,action)=>{
    const newState = {...state}
    if(action.type==='NEW_ITEM'){
        newState.newTask=action.text
    }
    if(action.type === 'ADD_ITEM'){
        let newItem={}
        newItem.id = Math.random()
        newItem.task = newState.newTask
        newState.toDoList.push(newItem)
        newState.newTask=''
    }
    
    console.log(newState)
    return newState
}

export default reducer;