import { Link } from "react-router-dom";
import { useState } from "react";
import './style.scss';
import Menu from "../Menu";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <>
    <nav className="nav-bar">
      <section className="nav-bar--left">
        <Link to="/"><h1 className="nav-bar--title">My Shop</h1></Link>
      </section>
    </nav>
    <Menu isOpen={isOpen} setIsOpen={setIsOpen}/>
    </>
  )
}

export default Nav;