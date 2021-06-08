import  React from 'react';
 

const cvalue =(props) =>{
    return(
        // <button className={"login_btn"}>{props.content}</button>
        <div className="conversion">
            <img className={"flag"}alt={"flag"} src={props.src}></img>
            <h1>{props.value}</h1>
            <div className={"partition"}></div>
            <select>
            <option>{props.change}</option>
            </select>
        </div>
    );
};

export default cvalue;