import React from 'react';

const TableBody = props => { 
    console.log(props.characterData)
    const rows = props.characterData.map((row, index) => {
        return (
            <tr key={index}>
                <td>{row.id}</td>
                <td>{row.firstName}</td>
                <td>{row.lastName}</td>
                <td>{row.email}</td>
                <td><button onClick={() => props.removeCharacter(index)}>Delete</button></td>
            </tr>
        );
    });

    return <tbody>{rows}</tbody>;
}
export default TableBody