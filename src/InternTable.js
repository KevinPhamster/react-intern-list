/**
 * Created by kagek_000 on 10/24/2016.
 */
import React, { Component } from 'react';
import InternRow from './InternRow';

class InternTable extends Component {
    render() {
        const onClick = this.props.onClick;
        return (
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Project</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.interns.map(function(intern){
                        return (<InternRow intern={intern} onInternSelect={onClick} key={intern.name}/>);
                    })}
                </tbody>
            </table>
        );
    }
}

module.exports = InternTable;