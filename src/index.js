import React from "react";
import ReactDOM from "react-dom";
import EmbeddedGist from "./EmbeddedGist.js"

///////////////////////////////////////////////////

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

///////////////////////////////////////////////////

class Clock extends React.Component {
    constructor(props) {
      super(props);
      this.state = {date: new Date()};
    }
  
    componentDidMount() {
      this.timerID = setInterval(
        () => this.tick(),
        1000
      );
    }
  
    componentWillUnmount() {
      clearInterval(this.timerID);
    }
  
    tick() {
      this.setState({
        date: new Date()
      });
    }
  
    render() {
      return (
        <div>
          <h1>Hello, world!</h1>
          <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        </div>
      );
    }
  }

/////////////////////////////////////////////////////////

const Ree = () => {

    return <div>
        <Clock></Clock>
        <div style={buttonContainerStyle}>
            <button type="button" className="btn btn-info" style={buttonStyle}  onClick={() => alert('click')}>Javascript</button>
            <button type="button" className="btn btn-info" style={buttonStyle}  onClick={() => alert('click')}>Typescript</button>
            <button type="button" className="btn btn-info" style={buttonStyle}  onClick={() => alert('click')}>Golang</button>
        </div>
        <SideBtns/>
    </div>
}


const SideBtns = () => {
    return <div className="container">
        <Index/>
    </div>
}

const Index = () => {
    const gists = [
        {
            "gistId" : 'hippohipporhino/286ec9fd570b151ea25cad8d56cdefb1',
            "fileName" : 'ts_basic_types.ts' 
        },
        {
            "gistId" : 'hippohipporhino/286ec9fd570b151ea25cad8d56cdefb1',
            "fileName" : 'go_basic_types.go'
        },
        {
            "gistId" : 'hippohipporhino/286ec9fd570b151ea25cad8d56cdefb1',
            "fileName" : 'js_basic_types.js'
        }
    ]
    const gistElements = gists.map((gist) =>
      <EmbeddedGist key={gist.gistId} gist={gist.gistId} file={gist.fileName}></EmbeddedGist>
    );

    return  <div className="row">
        {gistElements}    
    </div>
}

ReactDOM.render(<Ree />, document.getElementById("index"));
