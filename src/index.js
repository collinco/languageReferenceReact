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

/////////////////////////////////////////////////////////

class LandingPage extends React.Component {
    constructor(props) {
      super(props);
      this.state = { 'languageSelected' : "javascript"};
    }
  
    componentDidMount() {
      
    }
  
    componentWillUnmount() {
      
    }

    render() {
      return (
        <div>
          <LanguageButtons language={this.state.languageSelected}/>
          <LanguageContent language={this.state.languageSelected} />
        </div>
      );
    }
  }

/////////////////////////////////////////////////////////


const LanguageButtons = (props) => {
    console.log('props', props)
    return   <div style={buttonContainerStyle}>
        <button type="button" className="btn btn-info" style={buttonStyle}  onClick={() => alert('click')}>Javascript</button>
        <button type="button" className="btn btn-info" style={buttonStyle}  onClick={() => alert('click')}>Typescript</button>
        <button type="button" className="btn btn-info" style={buttonStyle}  onClick={() => alert('click')}>Golang</button>
    </div>
}

const LanguageContent = (props) => {
    console.log('props', props)
    return <div className="container">
        <h1>Basic Types</h1>
        <TopicGists topic="basicTypes" language={props.language}/>
    </div>
}

const TopicGists = (props) => {
    console.log('props', props)

    const gists = {
        "javascript" : [
            // {
            //     "gistId" : 'hippohipporhino/286ec9fd570b151ea25cad8d56cdefb1',
            //     "fileName" : 'ts_basic_types.ts',
            //     "topic" : 'basicTypes'
            // },
            // {
            //     "gistId" : 'hippohipporhino/286ec9fd570b151ea25cad8d56cdefb1',
            //     "fileName" : 'go_basic_types.go',
            //     "topic" : 'basicTypes'
            // },
            {
                "gistId" : 'hippohipporhino/286ec9fd570b151ea25cad8d56cdefb1',
                "fileName" : 'js_basic_types.js',
                "topic" : 'basicTypes'
            }
        ],
        "golang" : [
            {
                "gistId" : 'hippohipporhino/286ec9fd570b151ea25cad8d56cdefb1',
                "fileName" : 'ts_basic_types.ts',
                "topic" : 'basicTypes'
            },
            {
                "gistId" : 'hippohipporhino/286ec9fd570b151ea25cad8d56cdefb1',
                "fileName" : 'go_basic_types.go',
                "topic" : 'basicTypes'
            },
            {
                "gistId" : 'hippohipporhino/286ec9fd570b151ea25cad8d56cdefb1',
                "fileName" : 'js_basic_types.js',
                "topic" : 'basicTypes'
            }
        ],

    }

    const gistElements = gists[props.language].map((gist) => {
        if (gist.topic === props.topic){
            return <EmbeddedGist key={gist.gistId} gist={gist.gistId} file={gist.fileName}></EmbeddedGist>
        }

    });

    return  <div className="row">
        {gistElements}    
    </div>
}

ReactDOM.render(<LandingPage />, document.getElementById("index"));
