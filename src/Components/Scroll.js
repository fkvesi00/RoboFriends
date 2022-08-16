import React from "react";

const Scroll = (props) => {
    return(
        <div style={{overflow:'scroll',border:'1px white',height:'800px'}}>
            {props.children}
        </div>
    )
}

export default Scroll;