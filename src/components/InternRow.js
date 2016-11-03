/**
 * Created by kagek_000 on 10/24/2016
 */
import React, { Component } from 'react';
import './InternRow.css';
import { connect } from 'react-redux';
import { toggleSelect } from '../actions';

class InternRow extends Component {
    constructor(props){
        super(props);
        this.state = {selected: false, color: 'white'};
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        const prevState = {selected: true, color: 'blue'};
        if (this.state.color === 'white' && this.state.selected === false){
        } else {
            prevState.selected = false;
            prevState.color = 'white';
        }
        this.setState(prevState, function(){
            return {
                selected: prevState.selected,
                color: prevState.color
            }
        });
        this.props.dispatch(toggleSelect(this.props.intern.id));
    }

    render(){
        return (
            <tr className={this.state.color} onClick={this.handleClick}>
                <td>{this.props.intern.name}</td>
                <td>{this.props.intern.project}</td>
            </tr>
        )
    }
}

export default connect()(InternRow)