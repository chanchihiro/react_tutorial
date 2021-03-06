import React from "react"
import ReactDOM from "react-dom"
import CommentList from './CommentList'
import CommentForm from './CommentForm'
import $ from 'jquery'

export default class CommentBox extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			data : []
		};
	}

	loadCommentsFromServer() {
		$.ajax({
			url : this.props.url,
			dataType : "json",
			cache : false,
			success : (data) => { this.setState({data : data}); },
			error : (xhr, status, err) => {
				console.error(this.props.url, status, err.toString());
			}
		});
	}

	handleCommentSubmit(comment) {
		let comments = this.state.data;
		let newComments = comments.concat([comment]);
		this.setState({data: newComments});
		$.ajax({
			url : this.props.url,
			dataType : "json",
			type : "POST",
			data : comment,
			success : (data) => {this.setState({data : data}); },
			error : (xhr, status, err) => {
				console.error(this.props.url, status, err.toString());
			}
		});
	}

	componentDidMount() {
		this.loadCommentsFromServer();
		setInterval(this.loadCommentsFromServer.bind(this), this.props.pollInterval);
	}

	render() {
		return(
			<div className="commentBox">
				<dt>
					<dd><CommentList data={this.state.data} /></dd>
					<dd><CommentForm onCommentSubmit={this.handleCommentSubmit.bind(this)} /></dd>
	      		</dt>
	      	</div>
		);
	}
}