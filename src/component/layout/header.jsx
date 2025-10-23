import React, { useState } from "react";
import "./Header.css";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    // Add scroll effect
    React.useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: "Home", href: "home" },
        { name: "Contact", href: "contact" },
    ];

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className={`header ${scrolled ? 'scrolled' : ''}`}>
            <div className="header-container">
                {/* Logo */}
                <div className="logo">
                    <div className="logo-icon">🏡</div>
                    <h1 className="logo-text">Rent House</h1>
                </div>

                {/* Navigation */}
                <nav className={`nav ${isOpen ? "nav-open" : ""}`}>
                    <ul className="nav-list">
                        {navLinks.map((link, index) => (
                            <li key={index} className="nav-item">
                                <a 
                                    href={link.href} 
                                    className="nav-link"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Auth Buttons */}
                <div className="auth-buttons">
                    <button className="btn btn-login">Sign In</button>
                    <button className="btn btn-signup">List Property</button>
                </div>

                {/* Mobile Menu Button */}
                <button 
                    className={`mobile-menu-btn ${isOpen ? "open" : ""}`}
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    <span className="hamburger-line"></span>
                    <span className="hamburger-line"></span>
                    <span className="hamburger-line"></span>
                </button>
            </div>
        </header>
    );
};

export default Header;