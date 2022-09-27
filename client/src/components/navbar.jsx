import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">1inch Demo</Link>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link className="nav-link" href="/">Home <span className="sr-only">(current)</span></Link>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <Link className="btn btn-outline-success my-2 my-sm-0" to="/add-blockchain">Add blockchain</Link>
        </form>
      </div>
    </nav>
  )
}
