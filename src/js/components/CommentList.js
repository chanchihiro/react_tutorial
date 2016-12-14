import React from "react"
import ReactDOM from "react-dom"

import Comment from "./Comment"

export default class CommentList extends React.Component {
	render(){
		let commentNodes = this.props.data.map((comment) => {
			return(<Comment author={comment.author}>{comment.text}</Comment>);
		});
		return(<div className="commentList">{commentNodes}</div>);
	}
}