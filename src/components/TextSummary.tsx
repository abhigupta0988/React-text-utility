import React from 'react'

const TextSummary = (props: TextSummaryProps) => {
	return (
		<>
			<div className="container">
				<h2>
					{props.heading}
				</h2>
				<div className="container my-3">
					<div className="my-3">
						<p>
							{props.text.trim().length ? props.text.trim().split(' ').length : 0} words and {props.text.trim().length} Characters
						</p>
					</div>
					<div className="my-3">
						<p>
							{props.text.trim().length ? (props.text.trim().split(' ').length / 60).toFixed(2) : 0} min read
						</p>
					</div>
				</div>
				<div className="container my-3">
					<h3>
						Preview
					</h3>
					<div className="my-3">
						<p>{props.text}</p>
					</div>
				</div>
			</div>
		</>
	)
};

export default TextSummary;

type TextSummaryProps = {
	heading: string;
	text: string;
};
