
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
     <h1 className='container mt-4'>404 Not Found</h1>
      <Link to='/' >Go Back To Home</Link>
    </div>
  )
}

export default NotFound