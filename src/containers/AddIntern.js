/**
 * Created by kagek_000 on 10/28/2016
 */
import { connect } from 'react-redux';
import { addIntern } from '../actions';
import AddButton from '../components/AddButton';

const mapStateToProps = (state) => {
    return{
        inputName: state.inputs.inputName,
        inputProject: state.inputs.inputProject,
        interns: state.interns
    }
};

const mapDispatchToProps = (dispatch, ownProps) => ({
    onClick: (inputName, inputProject, interns) => {
        let internAdded = true;
        interns.forEach(function(intern){
            if(intern.name === inputName){
                internAdded = false;
            }
        });
        if(internAdded) {
            dispatch(addIntern(inputName, inputProject));
        }
        else{
            console.log("Did not add!");
        }
    }
});

const AddIntern = connect(mapStateToProps, mapDispatchToProps)(AddButton);

export default AddIntern;
