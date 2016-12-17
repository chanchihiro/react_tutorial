import React from "react"
import ReactDOM from "react-dom"

export default class CommentForm extends React.Component {
	handleSubmit(e){
		e.preventDefault();
		let author = this.refs.author.value.trim();
		let text = this.refs.text.value.trim();
		if(!text || !author) return;
		this.props.onCommentSubmit({author: author, text: text});
		this.refs.author.value = "";
		this.refs.text.value = "";
	}

	render(){
		return (
			<form className="commentForm" onSubmit={this.handleSubmit.bind(this)}>
				<input type="text" placeholder="名前" ref="author" />
				<input type="text" placeholder="なんかしら書いて" ref="text" />
				<input type="submit" value="送信する" />
			</form>
		);
	}
}