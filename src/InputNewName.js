/**
 * Created by kagek_000 on 10/24/2016.
 */
import React, { Component } from 'react';

class InputNewName extends Component {

    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(){
        this.props.onUserInput(
            this.refs.internNameInput.value,
            this.refs.internProjectSelect.value
        );
    }

    render(){
        return(
            <form>
                <div className="form-group">
                    <label htmlFor="name">Intern Name</label>
                    <input type="text" ref="internNameInput" onChange={this.handleChange} value={this.props.internName} className="form-control" id="name" placeholder="Intern name" />
                </div>
                <div className="form-group">
                    <select id="portalprojects" ref="internProjectSelect" onChange={this.handleChange} value={this.props.internProject} className="form-control" placeholder="Portal Projects">
                        <option></option>
                        <option>WineKey</option>
                        <option>NeyborTalk</option>
                        <option>Notarycam</option>
                        <option>Hope Now</option>
                        <option>Boat Pool</option>
                        <option>Portal Checkin</option>
                        <option>Naya</option>
                    </select>
                </div>
            </form>
        )
    }
}

module.exports = InputNewName;