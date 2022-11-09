import { Link } from "react-router-dom";
import Icon from '../images/store_icon.png'
const Nav = () => {
  return (
    <nav className="nav-bar">
      <section className="nav-bar--left">
        <Link to="/"><img src={Icon} alt="store icon"></img></Link>
        <Link to="/"><h1 className="nav-bar--title">My Shop</h1></Link>
      </section>
      <section className="nav-bar--right">
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/about-us">About Us</Link>
      </section>
    </nav>
  )
}

export default Nav;