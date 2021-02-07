import React from "react";
import { Link } from "react-router-dom";

const BlogList = ({ blogs, title }) => {
	return (
		<div className="blog-list">
			<h2>{title}</h2>
			{blogs.map(blog => (
				<div key={blog.id} className="blog-preview">
					<Link to={`/blogs/${blog.id}`}>
						<h2>{blog.title}</h2>
						<p>Created by {blog.author}</p>
					</Link>
					{/* <button onClick={() => handleDelete(blog.id)}>Delete</button> */}
				</div>
			))}
		</div>
	);
};

export default BlogList;
