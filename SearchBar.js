import React from 'react';


function SearchBar({placeholder, datat}){
    return(
        <div className='Search'>
            <div className='SearchInputs'>
                <input type='text' placeholder={placeholder}/>
                <div className='SearchIcon'></div> 
            </div>
            <div className='DataResult'></div>
        </div>
    )
};

export default SearchBar;