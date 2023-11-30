import React from 'react';
import TableHeader from "../components/TableHeader"
import TableBody from "../components/TableBody"
const Table = (props) => {
 
    const { characterData, removeCharacter } = props;
    
        return (
            <table>
                <TableHeader />
                <TableBody characterData={characterData} removeCharacter={removeCharacter} />
            </table>
        );
}

export default Table;