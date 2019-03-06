const initialState = {
    number: 0,
    buttons: [1,2,3,4,5,6,7,8,9,0],
    operations : ['+','-','*','/']
}

const reducer = (state = initialState, action)=>{
    const newState ={...state};
    
    if(action.type==='EQUAL'){
       newState.number = eval(newState.number)
    }
    if(action.type==='RESET'){
        newState.number=0
    }
    if(action.type==='ADD_ELEM'){
       (newState.number=== 0)? newState.number=action.text: newState.number+=action.text
    }
    if(action.type==='ADD_OPERATOR'){
        newState.number += action.text
        // TODO: як можна застерегти від повторного введення операторів?
    }
    return newState
}

export default reducer