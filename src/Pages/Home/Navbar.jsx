import { useState, useEffect } from "react";
import { Link } from "react-scroll"; 
import ContactMeModal from "./ContactMeModal";
import { AnimatePresence } from "framer-motion";

function Navbar() {
    const [active, setActive] = useState(false);
    const [modalOpen, setModalOpen] = useState(false); 

    
    const toggleNav = () => {
        setActive(!active)
    }

    const closeMenu = () => {
        setActive(false)
    }

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 500) {
                closeMenu(); // also need to *call* this function
            }
        }
    
        window.addEventListener("resize", handleResize);
    
        return () => {
            window.removeEventListener("resize", handleResize)
        }
    }, []);

    useEffect(() => {
        if (window.innerWidth <= 1200) {
            closeMenu();
        }
    }, []);

    return (
        <nav className={`navbar ${active ? "active" : ""}`}>
            <div>
                <img src="./img/logo.png" alt="Logoipsum" style={{ height: 80 }}/>
            </div>
            <a 
            className={`navbar_burger ${active ? "active" : ""}`}
            onClick={toggleNav}
            > 
                <span className="navbar_burger_line"></span>
                <span className="navbar_burger_line"></span>
                <span className="navbar_burger_line"></span>
            </a>

            <div className={`navbar--items ${active ? "active" : ""}`} style={{ height: 80 }}>
                <ul>
                    <li>
                        <Link 
                            onClick={closeMenu}
                            activeClass="navbar--active-content"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={580}
                            to="AboutMe"
                            className="navbar--content"
                        > 
                            About Me 
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
                    <button
                        onClick={() => setModalOpen(true)}
                        activeClass="navbar--active-content"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={580}
                        to="Contact"
                        className="btn btn-outline-primary">
                            Contact Me
                    </button>
                </ul>
                <ContactMeModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
            </div>
        </nav>
    )
}

export default Navbar;