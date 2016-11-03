/**
 * Created by kagek_000 on 11/1/2016
 */

const INITIAL_STATE = {
    inputName: '',
    inputProject: '',
};

const inputs = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'ON_NAME_CHANGE':
            return{
                ...state, inputName: action.name
            };
        case 'ON_PROJECT_CHANGE':
            return{
                ...state, inputProject: action.project
            };
        default:
            return state;
    }
};

export default inputs;