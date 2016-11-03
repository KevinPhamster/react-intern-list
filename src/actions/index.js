/**
 * Created by kagek_000 on 10/27/2016
 */
let nextInternId = 0;

export const addIntern = (name, project) => {
  return{
      type: 'ADD_INTERN',
      id: nextInternId++,
      name: name,
      project: project,
      selected: false
  }
};

export const changeNameInput = (name) => {
    return{
        type: 'ON_NAME_CHANGE',
        name: name
    }
};

export const changeProjectInput = (project) => {
    return{
        type: 'ON_PROJECT_CHANGE',
        project: project
    }
};
export const deleteSelectedInterns = () => {
  return{
      type: 'DELETE_SELECTED_INTERNS'
  }
};

export const toggleSelect = (id) => {
    return{
        type: 'TOGGLE_SELECT',
        id
    }
};