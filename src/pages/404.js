import React from "react"
import Layout from "../Components/layout"
const error = () => {
  return (
    <Layout>
      <div className="errorpage center-section">
        <h1>Page not found</h1>
        <h3>the page you wanted to acces doesn't exist </h3>
      </div>
    </Layout>
  )
}

export default error
