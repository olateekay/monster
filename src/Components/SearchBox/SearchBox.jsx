import React from 'react'; 
import './SearchBox.css'

export const SearchBox = ({placeholder,handleChange}) => (
    <input  
        class="search"
        type="search" 
        placeholder={placeholder} 
        onChange= {handleChange}  
       />
);