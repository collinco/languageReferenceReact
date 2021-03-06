import React from "react";
import ReactDOM from "react-dom";
import EmbeddedGist from "./EmbeddedGist.js";

///////////////////////////////////////////////////

const buttonStyle = {
	margin: "10px",
	display: "block",
	width: "100px"
};

const buttonContainerStyle = {
	float: "left",
	position: "sticky",
	top: "90px",
	left: "90px"
};

const jsButtonStyle = {
	background: "#f5de19",
	color: "black",
	"border-color": "grey"
};

const tsButtonStyle = {
	background: "#007acc",
	color: "white",
	"border-color": "grey"
};

const goButtonStyle = {
	background: "#67d1df",
	color: "black",
	"border-color": "grey"
};

const containterStyle = {
	// 'padding-top': "2%",
	"min-height": "90vh",
	"margin-top": "15px",
	"margin-bottom": "15px",
	"background-color": "#004877"
};

const headerStyle = {
	"margin-top": "15px",
	"margin-bottom": "15px",
	display: "inline-block",
	color: "white"
};

/////////////////////////////////////////////////////////

class LandingPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = { language: "javascript" };
		this.handleLanguageChange = this.handleLanguageChange.bind(this);
	}

	handleLanguageChange(languageClicked) {
		this.setState({ language: languageClicked });
	}

	componentDidMount() {}

	componentWillUnmount() {}

	render() {
		return (
			<div>
				<LanguageButtons
					language={this.state.language}
					onLanguageChange={this.handleLanguageChange}
				/>
				<GistContainer language={this.state.language} />
			</div>
		);
	}
}

class LanguageButtons extends React.Component {
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(e) {
		this.props.onLanguageChange(e);
	}

	componentDidMount() {}

	componentWillUnmount() {}

	render() {
		return (
			<div style={buttonContainerStyle}>
				<button
					type="button"
					className="btn btn-info"
					style={Object.assign({}, buttonStyle, jsButtonStyle)}
					onClick={() => {
						this.handleChange("javascript");
					}}
				>
					Javascript
				</button>
				<button
					type="button"
					className="btn btn-info"
					style={Object.assign({}, buttonStyle, tsButtonStyle)}
					onClick={() => {
						this.handleChange("typescript");
					}}
				>
					Typescript
				</button>
				<button
					type="button"
					className="btn btn-info"
					style={Object.assign({}, buttonStyle, goButtonStyle)}
					onClick={() => {
						this.handleChange("golang");
					}}
				>
					Golang
				</button>
			</div>
		);
	}
}

class LanguageContent extends React.Component {
	constructor(props) {
		super(props);
		this.hideGist = this.hideGist.bind(this);
		this.showGist = this.showGist.bind(this);
		this.state = { hiddenGists: {} };
	}

	hideGist(e) {
		var newState = this.state.hiddenGists;
		newState[e] = false;
		this.setState({ hiddenGists: newState });
	}

	showGist(e) {
		var newState = this.state.hiddenGists;
		newState[e] = true;
		this.setState({ hiddenGists: newState });
	}

	componentDidMount() {}

	componentWillUnmount() {}

	render() {
		let x;
		let y;

		if (this.state.hiddenGists[this.props.topicName]) {
			x = <span onClick={() => this.hideGist(this.props.topicName)}>⬇️</span>;
		} else {
			x = <span onClick={() => this.showGist(this.props.topicName)}>⬆️</span>;
		}

		if (this.state.hiddenGists[this.props.topicName] === true) {
			y = (
				<TopicGists
					topic={this.props.topicName}
					language={this.props.language}
				/>
			);
		}

		return (
			<div>
				<h1 style={headerStyle}>
					{this.props.displayName} {x}
				</h1>
				{y}
			</div>
		);
	}
}

const GistContainer = props => {
	const gistTopics = [
		{
			topicName: "basicTypes",
			displayName: "Basic Types"
		},
		{
			topicName: "varDeclaration",
			displayName: "Variable Declarations"
		}
	];

	const gistTopicsElements = gistTopics.map(topicObj => {
		return (
			<LanguageContent
				language={props.language}
				displayName={topicObj.displayName}
				topicName={topicObj.topicName}
			/>
		);
	});

	return (
		<div style={containterStyle} className="container">
			{gistTopicsElements}
		</div>
	);
};

/////////////////////////////////////////////////////////

const TopicGists = props => {
	const gists = {
		javascript: [
			{
				gistId: "hippohipporhino/286ec9fd570b151ea25cad8d56cdefb1",
				fileName: "js_basic_types.js",
				topic: "basicTypes"
			},
			{
				gistId: "hippohipporhino/92153976220160cd1e7a88820babb38b",
				fileName: "js_var_declaration.js",
				topic: "varDeclaration"
			}
		],
		typescript: [
			{
				gistId: "hippohipporhino/286ec9fd570b151ea25cad8d56cdefb1",
				fileName: "ts_basic_types.ts",
				topic: "basicTypes"
			},
			{
				gistId: "hippohipporhino/92153976220160cd1e7a88820babb38b",
				fileName: "ts_basic_types.ts",
				topic: "varDeclaration"
			}
		],
		golang: [
			{
				gistId: "hippohipporhino/286ec9fd570b151ea25cad8d56cdefb1",
				fileName: "go_basic_types.go",
				topic: "basicTypes"
			},
			{
				gistId: "hippohipporhino/92153976220160cd1e7a88820babb38b",
				fileName: "go_var_declaration.go",
				topic: "varDeclaration"
			}
		]
	};

	const gistElements = gists[props.language].map(gist => {
		if (gist.topic === props.topic) {
			return (
				<EmbeddedGist
					key={gist.fileName}
					gist={gist.gistId}
					file={gist.fileName}
				></EmbeddedGist>
			);
		}
	});

	return <div className="row">{gistElements}</div>;
};

ReactDOM.render(<LandingPage />, document.getElementById("index"));

// TODO
// accordion functionalility
// movement when swapping
// css color switching
// overview / tips
// logos in top left
// move css out
// move classes out
// linter
