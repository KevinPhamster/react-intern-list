/**
 * Created by kagek_000 on 10/28/2016
 */
import React from 'react';

const AddButton = ({ onClick, inputName, inputProject, interns }) => (
    <button type="submit" className="btn btn-primary" onClick={e => {
        onClick(inputName, inputProject, interns)
    }}>Add Intern</button>
);

export default AddButton;