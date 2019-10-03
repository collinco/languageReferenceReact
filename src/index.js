import React from "react";
import ReactDOM from "react-dom";
import EmbeddedGist from "./EmbeddedGist.js"
const Ree = () => {
    return <div className="container"><div className="row"><Index/></div></div>
}


const Index = () => [
    <EmbeddedGist gist="hippohipporhino/286ec9fd570b151ea25cad8d56cdefb1" file="ts_basic_types.ts"></EmbeddedGist>,
    <EmbeddedGist gist="hippohipporhino/286ec9fd570b151ea25cad8d56cdefb1" file="go_basic_types.go"></EmbeddedGist>,
    <EmbeddedGist gist="hippohipporhino/286ec9fd570b151ea25cad8d56cdefb1" file="js_basic_types.js"></EmbeddedGist>
];

ReactDOM.render(<Ree />, document.getElementById("index"));
