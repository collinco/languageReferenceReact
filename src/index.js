import React from "react";
import ReactDOM from "react-dom";
import EmbeddedGist from "./EmbeddedGist.js"

const buttonStyle = {
    margin: '10px',
    display: 'block'
}

const buttonContainerStyle = {
    float: 'left',
    position: 'sticky',
    top: '50px',
    left: '50px',
}

const SideBtns = () => {
    return <div className="container">
    <div className="row">
        <Index/>
    </div>
</div>
}

const Ree = () => {

    return <div>
        <div style={buttonContainerStyle}>
            <button type="button" className="btn btn-info" style={buttonStyle}>Javascript</button>
            <button type="button" className="btn btn-info" style={buttonStyle}>Typescript</button>
            <button type="button" className="btn btn-info" style={buttonStyle}>Golang</button>
        </div>
        <SideBtns/>
    </div>
}


const Index = () => [
    <EmbeddedGist gist="hippohipporhino/286ec9fd570b151ea25cad8d56cdefb1" file="ts_basic_types.ts"></EmbeddedGist>,
    <EmbeddedGist gist="hippohipporhino/286ec9fd570b151ea25cad8d56cdefb1" file="go_basic_types.go"></EmbeddedGist>,
    <EmbeddedGist gist="hippohipporhino/286ec9fd570b151ea25cad8d56cdefb1" file="js_basic_types.js"></EmbeddedGist>
];

ReactDOM.render(<Ree />, document.getElementById("index"));
