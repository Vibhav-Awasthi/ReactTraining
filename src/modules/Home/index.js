//imports
//component define, declare
//html,js
import React, {Component} from 'react';
import './index.css'

class Home extends Component{
    render(){
        return(
            <div className={"homeContainer"}>
                <h1 id={""}>{"Hello from Home"}</h1>
            </div>
        );
    }
}

export default Home;