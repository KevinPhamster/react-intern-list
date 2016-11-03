/**
 * Created by kagek_000 on 10/27/2016
 */

const intern = (state, action) => {
        switch (action.type) {
      case 'ADD_INTERN':
            return{
                id: action.id,
                name: action.name,
                project: action.project,
                selected: false
            };
      case 'TOGGLE_SELECT':
          if(state.id !== action.id){
              return state
          }
          return {...state, selected: !state.selected};
      default:
          return state;
  }
};

const interns = (state = [], action) => {
  switch (action.type){
      case 'ADD_INTERN':
         return [
            ...state,
            intern(undefined, action)
         ];
      case 'TOGGLE_SELECT':
          return state.map(t => intern(t, action));
      case 'DELETE_SELECTED_INTERNS':
          const currentInternsList = state;
          const updatedInternsList = currentInternsList.filter(function(e){
              return !e.selected;
          });
          return updatedInternsList;
      default:
          return state
  }
};

export default interns;