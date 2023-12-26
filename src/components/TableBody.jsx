import React, { useState } from 'react';
import '../components/flickity.css';
import Flickity from 'react-flickity-component'
import { useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';

const TableBody = props => {
  
   // const rows = props.characterData.map((row, index) => {
        return (
         // <div>
            <Flickity
            className='slider'
            elementType={'tr'}
            
         >
             {/* <Carousel className='crsl'> */}
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
{/* </Carousel>  */}
           </Flickity>
         //   </div>
        );
    }
    //);

   // return <tbody>{rows}</tbody>;
//}
export default TableBody