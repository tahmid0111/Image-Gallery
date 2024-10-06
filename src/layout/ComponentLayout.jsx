import React from 'react'
import Header from "../components/shared/Header";
import Navbar2 from "../components/shared/Navbar2";

const ComponentLayout = (props) => {
  return (
    <div>
      <Header />
      <div className="mx-20">{props.children}</div>
    </div>
  )
}

export default ComponentLayout
