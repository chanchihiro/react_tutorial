import React from "react"
import ReactDOM from "react-dom"

class CommentBox extends React.Component {
	constructor(props){
		super(props);
	}

	render() {
		return(
			<div className="commentBox">
				Hello, world!
      		</div>
		);
	}
}

ReactDOM.render(
	<CommentBox />,
 	document.getElementById('container')
);