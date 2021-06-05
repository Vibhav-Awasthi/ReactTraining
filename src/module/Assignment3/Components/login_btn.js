import  React from 'react';
 

const button =(props) =>{
    return(
        <button className={"login_btn"}>{props.content}</button>
    );
};

export default button;