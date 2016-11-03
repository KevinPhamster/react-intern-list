/**
 * Created by kagek_000 on 10/28/2016
 */
import React from 'react';

const InternInput = ({ onNameChange, onProjectChange, newIntern }) => (
    <form>
        <div className="form-group">
            <label htmlFor="name">Intern Name</label>
            <input type="text" onChange={onNameChange} value={newIntern.name} className="form-control" id="name" placeholder="Intern name" />
        </div>
        <div className="form-group">
            <select id="portalprojects" onChange={onProjectChange} value={newIntern.project} className="form-control" placeholder="Portal Projects">
                <option></option>
                <option>WineKey</option>
                <option>NeyborTalk</option>
                <option>Notarycam</option>
                <option>Hope Now</option>
                <option>Boat Pool</option>
                <option>Portal Checkin</option>
                <option>Naya</option>
            </select>
        </div>
    </form>
);

export default InternInput;