/**
 * Created by kagek_000 on 11/3/2016
 */
import React from 'react';

const DeleteButton = ({ onClick }) => (
    <button type="submit" className="btn btn-primary" onClick={onClick}
    >Delete Selected Interns</button>
);

export default DeleteButton;