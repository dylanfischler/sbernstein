import React from 'react';
import { Link } from 'react-router'

export default (props) => {
	return (
		<div id="nav-bar">
			<div className="nav">
				<div className="brand">
					<span className="title">Steven L. Bernstein MD,PhD.</span>
					<span className="subtitle">Lab of Molecular Research, Ophthalmology research group</span>
				</div>
				<ul>
					<li><Link to="/home" activeClassName="active">Home</Link></li>
					<li><Link to="/research" activeClassName="active">Research</Link></li>
					<li><Link to="/publications" activeClassName="active">Publications</Link></li>
					<li><Link to="/members" activeClassName="active">Members</Link></li>
					<li><Link to="/gallery" activeClassName="active">Gallery</Link></li>
				</ul>
			</div>
		</div>
	)
}