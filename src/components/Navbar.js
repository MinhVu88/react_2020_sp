import React from "react"

const Navbar = () => {
  const title = "React 2020 | The Dojo Blog | S.P"

  return (
    <nav className="navbar">
      <h1>{title}</h1>
      <div className="links">
        <a href="/">Home</a>
        {" | "}
        <a
          href="/create"
          style={{
            color: "#fff",
            backgroundColor: "#f1356d",
            borderRadius: "8px"
          }}
        >
          New Blog
        </a>
      </div>
    </nav>
  )
}

export default Navbar
