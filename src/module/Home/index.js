import React, {Component} from 'react';
import './index.css'
class Home extends Component{
    render(){
        return(
            <div>
                <h1 className={"h1tag"}>{"Hello from Home"}</h1>
                <h2 id={"h2tag"}>{"Hello from Home"}</h2>
            </div>
        );
    }
}
export default Home;
//export Home; for exporting more than one thing