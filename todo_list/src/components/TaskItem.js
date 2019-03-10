import React,{Component} from 'react';

class TaskItem extends Component{
    render(){
        return(
            <li key={this.props.id} className="item">
                <label>
                    <input type="checkbox" />
                    <span>{this.props.task}</span>
                </label>
                <input type="button" name={this.props.id} value="x" onClick={this.props.del}/>
            </li>
        )
    }
}


export default TaskItem