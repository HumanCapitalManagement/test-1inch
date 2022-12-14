import { Link } from "react-router-dom";

export default function Navbar({ state }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">1inch Demo</Link>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
        {
          ['loading', 'submitting'].includes(state) &&
          <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        }
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <Link className="btn btn-outline-success my-2 my-sm-0" to="/add-blockchain">Add blockchain</Link>
        </form>
      </div>
    </nav>
  )
}
