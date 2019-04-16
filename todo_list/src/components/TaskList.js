import React,{Component} from 'react';
import {connect} from 'react-redux';
import TaskItem from './TaskItem';

class TaskList extends Component{

    renderTasks(){
        if(this.props.toDoList.length===0){
            return <h3>You have no tasks, today!</h3>
        } else{
            return(
                    <ul>
                        {this.props.toDoList.map((el)=>{
                            return <TaskItem 
                                key={el.id} 
                                id={el.id}
                                task={el.task} 
                                del={this.props.del}
                            />
                        })}
                </ul>
            )
        }
    }

    render(){
        console.log()
        return(
            <div className="box">
                {this.renderTasks()}
            </div>
        )
    }
}

const mapStateToProps=(state)=>{
    return{
        newTask: state.newTask,
        toDoList: state.toDoList
    }
}

const mapDispatchToProps = (dispatch)=>{
    return{
        del: (e)=>dispatch({type:'DELETE_TASK', text: e.target.name})
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(TaskList)