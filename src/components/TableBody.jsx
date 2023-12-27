import React from 'react';
import '../components/flickity.css';
import Flickity from 'react-flickity-component'


const TableBody = props => {
  
        return (
            <Flickity
            className='slider'
            elementType={'tr'}  
         >
         {props.characterData.map((row, index) => {
            return ( 
               
                <tr key={index} className='Plate'> 
                <td>{row.id}</td>
                <td>{row.firstName}</td>
                <td>{row.lastName}</td>
                <td>{row.email}</td>
                <td><button onClick={() => props.removeCharacter(index)}>Delete</button></td>  
            </tr>  
           
            )
         })}
           </Flickity>  
        );
    }
export default TableBody