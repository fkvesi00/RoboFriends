import React from "react";

const SearchBar = ({promjena}) => {
    return (
            <div  style={{height:'200px', width:'100%', display:'flex', justifyContent:'center', alignItems:'center', margin:'20', padding:'20'} }>
                <input type="text" style={{height:'50px', width:'300px'}} placeholder='Search...' onChange={promjena} className="bg-light-blue dib shadow-5 grow bw2"/>
            </div>
    )
}

export default SearchBar;