import React, { Component } from 'react';
// import logo from './logo.svg';
import InputNewName from './InputNewName';
import InternTable from './InternTable';
import './App.css';

var INTERNS = [
    {index: 0, name: 'Jason Chiu', project: 'NeyborTalk', selected: false},
    {index: 1, name: 'Kevin Pham', project: 'WineKey', selected: false},
    {index: 2, name: 'Kevin Yu', project: 'Naya', selected: false}
];

class App extends Component {
    constructor(props){
        super(props);
        this.state = {inputName: '', inputProject: '', interns: INTERNS};
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleUserInput = this.handleUserInput.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleUserInput(internName, internProject){
        this.setState({
            inputName:internName,
            inputProject:internProject
        })
    }

    handleSubmit() {

        const updatedInternsList = this.state.interns;
        const newIntern = this.state.inputName;
        const newProject = this.state.inputProject;
        let internAdded = true;
        updatedInternsList.forEach(function(intern){
           if(intern.name === newIntern){
               internAdded = false;
           }
        });
        if(internAdded){
            updatedInternsList.push({index: updatedInternsList.length, name: newIntern, project: newProject, selected: false});
            this.setState({
                interns: updatedInternsList
            });
        }
    }

    handleDelete(){
        if(confirmation){
            const currentInternsList = this.state.interns;
            const updatedInternsList = currentInternsList.filter(function(intern){
                return !intern.selected;
            });
            this.setState({
                interns: updatedInternsList
            });
        }
    }

    handleClick(internIndex, internName, isSelected){
        const updatedInternsList = this.state.interns;
        updatedInternsList[internIndex].selected = isSelected;
        this.setState({
            interns: updatedInternsList
        })
    }

  render() {
    return (
        <div>
            <InputNewName internName={this.state.inputName} internProject={this.state.inputProject} onUserInput={this.handleUserInput}/>
            <InternTable onClick={this.handleClick} interns={this.state.interns}/>
            <button type="submit" className="btn btn-primary" onClick={this.handleSubmit}>Add Intern</button>
            <button type="submit" className="btn btn-primary" onClick={this.handleDelete}>Delete Selected Interns</button>
        </div>
    );
  }
}

export default App;
