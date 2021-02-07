import React, { useState } from "react";
import BlogList from "./BlogList";
import useFetch from "../hooks/useFetch";

const Home = () => {
	// strings, numbers or arrays can be rendered on the dom, booleans & objects can't
	// const person = {name: 'Tyrell Wellick', age: 27};
	const organization = "AllSafe CyberSecurity";
	const link = "https://en.wikipedia.org/wiki/Mr._Robot";

	const [name, setName] = useState("Elliot Alderson");
	const [age, setAge] = useState();

	const { data: blogs, isLoading, error } = useFetch("http://localhost:8000/blogs");

	// const handleDelete = id => {
	//   const filteredBlogs = blogs.filter(blog => blog.id !== id)
	//   setBlogs(filteredBlogs)
	// }

	return (
		<div className="home">
			{/* <p>{person}</p> */}
			<p>
				Name: {name}
				{" | "}
				Age: {age}
				{" | "}
				Organization: {name === "Elliot Alderson" ? organization : "Fsociety"}
				{" | "}
				Staff code: {name === "Elliot Alderson" ? ["ER", 28, "-06", 52] : "unknown"}
			</p>
			<br />
			<a href={link} target="_blank" rel="noreferrer">
				Read More
			</a>
			{" | "}
			<button onClick={() => setName("Darlene Alderson")}>Click Here</button>
			<br />
			{error && <div>{error}</div>}
			{isLoading && <div>Loading...</div>}
			{blogs && (
				<>
					<BlogList
						blogs={blogs}
						title="All Blogs"
						// handleDelete={handleDelete}
					/>
					<BlogList
						blogs={blogs.filter(blog => blog.author === "Maynard Keenan")}
						title="Keenan's blogs"
					/>
				</>
			)}
		</div>
	);
};

export default Home;
