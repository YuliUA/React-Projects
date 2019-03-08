import React, {Component} from 'react';
import Header from './components/Header';
import EnterField from './components/EnterField';
import TaskList from './components/TaskList';

class App extends Component{
    render(){
        return (
            <div>
                <Header/>
                <EnterField />
                <TaskList />
            </div>
        )
    }
}



export default App;