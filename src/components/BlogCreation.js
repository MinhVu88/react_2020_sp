import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const BlogCreation = () => {
	const history = useHistory();

	const [title, setTitle] = useState("");
	const [body, setBody] = useState("");
	const [author, setAuthor] = useState("Adam Jones");
	const [isLoading, setIsLoading] = useState(false);

	const handleSubmit = e => {
		e.preventDefault();

		const blog = { title, body, author };

		setIsLoading(true);

		fetch("http://localhost:8000/blogs", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(blog)
		}).then(() => {
			setIsLoading(false);

			console.log("new blog added");

			history.push("/");
		});
	};

	return (
		<div className="create">
			<h2>Add a new blog</h2>
			<form action="" onSubmit={handleSubmit}>
				<label htmlFor="">Blog Title</label>
				<input type="text" required value={title} onChange={e => setTitle(e.target.value)} />

				<label htmlFor="">Blog Content</label>
				<textarea
					name=""
					id=""
					cols="30"
					rows="10"
					required
					value={body}
					onChange={e => setBody(e.target.value)}></textarea>

				<label htmlFor="">Blog Author</label>
				<select name="" id="" value={author} onChange={e => setAuthor(e.target.value)}>
					<option value="Maynard Keenan">Maynard Keenan</option>
					<option value="Adam Jones">Adam Jones</option>
					<option value="Justin Chancellor">Justin Chancellor</option>
					<option value="Paul D'Amour">Paul D'Amour</option>
					<option value="Dan Carey">Dan Carey</option>
					<option value="Alex Grey">Alex Grey</option>
				</select>

				{!isLoading && <button>Add Blog</button>}
				{isLoading && <button disabled>Adding Blog...</button>}
			</form>
		</div>
	);
};

export default BlogCreation;
