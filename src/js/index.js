import React from "react"
import ReactDOM from "react-dom"

class CommentBox extends React.Component {
	constructor(props){
		super(props);
	}

	render() {
		return(
			<div className="commentBox">
				<h2>Comments</h2>
				<CommentList />
				<CommentForm />
      		</div>
		);
	}
}

ReactDOM.render(
	<CommentBox />,
 	document.getElementById('container')
);