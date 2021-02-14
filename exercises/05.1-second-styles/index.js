import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

const buttonStyles = {
	//write button styles here
	background: "yellow"
};

const badgeStyles = {
	//write the span styles here
	background: "red",
	color: "white",
	borderRadius: "50%"
};

const Badge = props => {
	return (
		<button style={buttonStyles} type="button" className="btn">
			{props.label}
			<span style={badgeStyles} className="badge badge-light">
				{props.number}
			</span>
		</button>
	);
};
Badge.propTypes = {
	label: PropTypes.string,
	number: PropTypes.string
};
//dont forget to change the label
ReactDOM.render(<Badge label="Alerts" number="2" />, document.querySelector("#myDiv"));
