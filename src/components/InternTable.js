/**
 * Created by kagek_000 on 10/24/2016
 */
import React from 'react';
import InternRow from './InternRow';

const InternTable = ({interns}) => {
    return (
    <table>
        <thead>
        <tr>
            <th>Name</th>
            <th>Project</th>
        </tr>
        </thead>
        <tbody>
        {interns.map(function(intern){
            return (<InternRow intern={intern} key={intern.name}/>);
        })}
        </tbody>
    </table>
)};

export default InternTable;