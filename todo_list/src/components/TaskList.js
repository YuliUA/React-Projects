import React,{Component} from 'react';
import {connect} from 'react-redux';

class TaskList extends Component{
    render(){
        console.log('=>', this)
        return(
            <ul>
                {
                    this.props.toDoList.map((el)=>{
                        return <li key={el.id}>{el.task}</li>
                    })
                }
            </ul>
        )
    }
}
const mapStateToProps=(state)=>{
    console.log('-->', state.toDoList)//TODO: State змінюється але TaskList не рендериться???
    return{
        toDoList: state.toDoList
    }
}

export default connect(mapStateToProps)(TaskList);