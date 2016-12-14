import React from "react"
import ReactDOM from "react-dom"

import CommentBox from "./components/CommentBox"


let data = [

];


ReactDOM.render(
	<CommentBox data={data} />,
	document.getElementById("container")
);