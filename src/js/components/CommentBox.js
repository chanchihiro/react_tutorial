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

	componentDidMount() {
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

	render() {
		return(
			<div className="commentBox">
				<h2>Comments</h2>
				<CommentList data={this.state.data} />
				<CommentForm />
      		</div>
		);
	}
}