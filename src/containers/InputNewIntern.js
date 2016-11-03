/**
 * Created by kagek_000 on 10/31/2016
 */
import { connect } from 'react-redux';
import { changeNameInput, changeProjectInput } from '../actions';
import InternInput from '../components/InternInput';

const mapStateToProps = (state, ownProps) => {
    return{
    newIntern: {
        name: state.internName,
        project: state.internProject
    }
}};

const mapDispatchToProps = (dispatch) => ({
    onNameChange: (e) => {
        dispatch(changeNameInput(e.target.value));
    },
    onProjectChange: (e) => {
        dispatch(changeProjectInput(e.target.value));
    }
});

const InputNewIntern = connect(mapStateToProps, mapDispatchToProps)(InternInput);

module.exports = InputNewIntern;