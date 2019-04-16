
const initialState={
    toDoList:[{
        id: 1,
        task: 'Buy food for dinner',
        done: false
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
        newItem.done = false
        newState.toDoList.push(newItem)
        newState.newTask=''
    }
    if(action.type==='SHOW'){
        let newList=newState.toDoList
        newState.toDoList=newList
    }
    if(action.type==='DELETE_TASK'){
        let id=action.text
        newState.toDoList = newState.toDoList.filter((el)=>{
            return el.id.toString() !== id
        })
    }
    if(action.type==='DONE'){
        action.text.style.textDecoration='line-through'
    }
    return newState
}

export default reducer;