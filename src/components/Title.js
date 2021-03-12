import React from 'react';

export default function Title({ name, title }) {
	return (
		<div className="row title">
			<div className="col-12 mx-auto my-2 text-left">
				<p className="">
					{name} {title}
				</p>
			</div>
		</div>
	);
}
