import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
	return (
		<div className="not-found">
			<h2 style={{ color: "#f1356d", marginBottom: "20px" }}>404 - Page Not Found</h2>
			<Link to="/" style={{ textDecoration: "none" }}>
				Back to Home
			</Link>
		</div>
	);
};

export default NotFoundPage;
