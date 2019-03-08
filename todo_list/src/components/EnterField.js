import React,{Component} from 'react';
import {connect} from 'react-redux';

class EnterField extends Component{
    render(){
        return(
            <form>
                <input type="text" onChange={this.props.changeTask} value={this.props.newTask} placeholder="Enter next task..."/>
                <input type="button" value="+" onClick={this.props.addTask}/>
            </form>
        )
    }
}

const mapDispatchToProps = (dispatch)=>{
    return{
        addTask: ()=>dispatch({type:'ADD_ITEM'}),
        changeTask: (e)=>dispatch({type:'NEW_ITEM', text: e.target.value})
    }
}

const mapStateToProps = (state)=>{
    return{
        task: state.newTask
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EnterField);