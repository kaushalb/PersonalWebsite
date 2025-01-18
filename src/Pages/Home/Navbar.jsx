import { useState, useEffect } from "react";
import { Link } from "react-scroll"; 

function Navbar() {
    const [active, setActive] = useState(false);
    
    const toggleNav = () => {
        setActive(!active)
    }

    const closeMenu = () => {
        setActive(false)
    }

    useEffect[() => {
        const handleResize = () => {
            if (window.innerWidth <= 500) {
                closeMenu
            }
        }

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize)
        }
    }, []];

    useEffect(() => {
        if (window.innerWidth <= 1200) {
            closeMenu
        }
    }, []);

    return (
        <nav className={`navbar ${active ? "active" : ""}`}>
            <div>
                <img src="./img/logo.svg" alt="Logoipsum"/>
            </div>
            <a 
            className={`navbar_burger ${active ? "active" : ""}`}
            onClick={toggleNav}
            > 
                <span className="navbar_burger_line"></span>
                <span className="navbar_burger_line"></span>
                <span className="navbar_burger_line"></span>
            </a>

            <div className={`navbar--items ${ active ? "active":"" }`}>
                <ul>
                    <li>
                        <Link 
                            onClick={closeMenu}
                            activeClass="navbar--active-content"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={580}
                            to="heroSection"
                            className="navbar--content"
                        > 
                            HOME 
                        </Link>
                    </li>
                    <li>
                        <Link 
                            onClick={closeMenu}
                            activeClass="navbar--active-content"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={580}
                            to="MyPortfolio"
                            className="navbar--content"
                        > 
                            Portfolio 
                        </Link>
                    </li>
                    <li>
                        <Link 
                            onClick={closeMenu}
                            activeClass="navbar--active-content"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={580}
                            to="AboutMet"
                            className="navbar--content"
                        > 
                            About Me 
                        </Link>
                    </li>
                </ul>
            </div>
            <Link
            onClick={closeMenu}
            activeClass="navbar--active-content"
            spy={true}
            smooth={true}
            offset={-70}
            duration={580}
            to="Contact"
            className="btn btn-outline-primary">
                Contact Me
            </Link>
        </nav>
    )
}

export default Navbar;