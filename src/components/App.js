//
import React, { Component } from 'react';
import { connect } from 'react-redux';
import InputNewIntern from '../containers/InputNewIntern';
import TableContainer from '../containers/TableContainer';
import AddIntern from '../containers/AddIntern';
import DeleteButton from '../containers/DeleteSelectedInternsButton';
import './App.css';

class App extends Component {

  render() {
    return (
        <div>
            <InputNewIntern input={this.props.inputs}/>
            <TableContainer/>
            <AddIntern />
            <DeleteButton />
        </div>
    );
  }
}

const mapStateToProps = state => ({
    inputs: state.inputs,
    interns: state.interns
});

export default connect(mapStateToProps)(App);

