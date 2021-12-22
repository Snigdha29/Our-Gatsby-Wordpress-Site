import * as React from "react"
import { Link } from "gatsby"

const NotFoundPage = () => {
  return (
    <div>
      Sorry, this page does not exist.
      <Link to='/'>Go back to Home Page</Link>
    </div>
  )
}

export default NotFoundPage
