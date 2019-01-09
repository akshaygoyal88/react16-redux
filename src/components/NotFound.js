import React from 'react';
import { Link } from 'react-router';

const NotFound = () => (
<div>
	<center>
		<h1>Page not found...</h1>
		<Link to="/">Return to Home Page</Link>
	</center>
</div>
);

export default NotFound;