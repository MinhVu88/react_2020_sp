import React, { useEffect, useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  // strings, numbers or arrays can be rendered on the dom, booleans & objects can't
  // const person = {name: 'Tyrell Wellick', age: 27};
  const organization = "AllSafe CyberSecurity";
  const link = "https://en.wikipedia.org/wiki/Mr._Robot";

  const [name, setName] = useState("Elliot Alderson");
  const [age, setAge] = useState();
  const [blogs, setBlogs] = useState([
    {
      id: 1,
      title: "Opiate",
      body: "lorem ipsum...",
      author: "Maynard Keenan"
    },
    { id: 2, title: "Undertow", body: "lorem ipsum...", author: "Adam Jones" },
    {
      id: 3,
      title: "Aenima",
      body: "lorem ipsum...",
      author: "Justin Chancellor"
    },
    { id: 4, title: "Lateralus", body: "lorem ipsum...", author: "Dan Carey" },
    {
      id: 5,
      title: "10000 Days",
      body: "lorem ipsum...",
      author: "Paul D'Amour"
    },
    {
      id: 6,
      title: "Fear Inoculum",
      body: "lorem ipsum...",
      author: "Alex Grey"
    },
    {
      id: 7,
      title: "Mer de Noms",
      body: "lorem ipsum...",
      author: "Maynard Keenan"
    }
  ]);

  const handleDelete = id => {
    const filteredBlogs = blogs.filter(blog => blog.id !== id);
    setBlogs(filteredBlogs);
  };

  useEffect(() => {
    console.log("useEffect() ran");
  }, [name]);

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
        Staff code:{" "}
        {name === "Elliot Alderson" ? ["ER", 28, "-06", 52] : "unknown"}
      </p>
      <br />
      <a href={link} target="_blank" rel="noreferrer">
        Read More
      </a>
      {" | "}
      <button onClick={() => setName("Darlene Alderson")}>Click Here</button>
      <br />
      <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} />
      <BlogList
        blogs={blogs.filter(blog => blog.author === "Maynard Keenan")}
        title="Keenan's blogs"
      />
    </div>
  );
};

export default Home;
