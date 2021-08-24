import React from "react"
import "./About.css"

function About(props) {
  console.log(props)
  return (
    <div className="about_container">
      <h3>My first React App - My movie app</h3>
      <br />
      <span>"Everything comes to him who hustles while he waits."</span>
      <br />
      <span>- Thomas A. Edison</span>
    </div>
  )
}

export default About
