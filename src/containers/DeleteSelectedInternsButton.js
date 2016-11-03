/**
 * Created by kagek_000 on 11/3/2016
 */
import { connect } from 'react-redux';
import { deleteSelectedInterns } from '../actions';
import DeleteButton from '../components/DeleteButton';

const mapStateToProps = (state) => {
    return{
        inputName: state.inputs.inputName,
        inputProject: state.inputs.inputProject
    }
};

const mapDispatchToProps = (dispatch) => ({
    onClick: () => {
        dispatch(deleteSelectedInterns());
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(DeleteButton);