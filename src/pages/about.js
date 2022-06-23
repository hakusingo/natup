import React from 'react';
import { useState, useEffect } from "react";

const About = () => {
  const [count, setCount] = useState(0)
  useEffect(() => {
    get()
  }, [count])

  function get() {
    let h2 = document.querySelector("h2").innerText
    console.log(h2)
  }

  return (
    <>
      <h2>UseEffect</h2>
      <button onClick={() => {
        setCount((prevCount) => prevCount + 1)
      }}>{count}</button>
    </>
  )
}

export default About
