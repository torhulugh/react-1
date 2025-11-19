import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import "./style.css";

export default function MobilePhoneMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMoreMenuOpen, setIsMoreMenuOpen] = useState(false);
  const [moreIconText, setMoreIconText] = useState("More");

  const mobileMenuRef = useRef(null);
  const mobileMenuCloseBtn = useRef(null);

  // Handle more menu toggle (equivalent to mobileMenuIconContainers[4].onclick)
  const handleMoreMenuToggle = () => {
    setIsMenuOpen(true);
    setIsMoreMenuOpen(true);
    setMoreIconText("About");
  };

  // Handle close button click (equivalent to mobileMenuCloseBtn.onclick)
  const handleCloseMenu = () => {
    setIsMenuOpen(false);
    setIsMoreMenuOpen(false);
    setMoreIconText("More");
  };

  return (
    <nav
      id="mobile-menu"
      ref={mobileMenuRef}
      style={{
        transform: isMenuOpen ? "translateY(0)" : "translateY(90px)",
      }}
    >
      <div id="mobileMenu-background-color">
        <img
          id="mobile-menu-close-btn"
          ref={mobileMenuCloseBtn}
          src="icn/mobile-menu-close-btn.svg"
          alt="Close Menu"
          style={{
            display: isMenuOpen ? "flex" : "none",
            zIndex: "9999",
          }}
          onClick={handleCloseMenu}
        />
        {/* tray1 */}
        <ul id="mobileMenu-icon-tray1">
          <li className="mobileMenuIconContainer">
            <Link className="mobileMenulink" to="/">
              <img className="mobileMenuIcon" src="icn/home-icon.svg" />
              <p className="mobilMenuIconsName">Home</p>
            </Link>
          </li>
          <li className="mobileMenuIconContainer">
            <Link className="mobileMenulink" to="/myworks">
              <img className="mobileMenuIcon" src="icn/myworks-icon.svg" />
              <p className="mobilMenuIconsName">craft</p>
            </Link>
          </li>
          <li className="mobileMenuIconContainer">
            <Link className="mobileMenulink" to="/gallery">
              <img className="mobileMenuIcon" src="icn/gallery-icon.svg" />
              <p className="mobilMenuIconsName">Gallery</p>
            </Link>
          </li>
          <li className="mobileMenuIconContainer">
            <Link className="mobileMenulink" to="/contact">
              <img className="mobileMenuIcon" src="icn/contact-icon.svg" />
              <p className="mobilMenuIconsName">Contact</p>
            </Link>
          </li>
          <li
            className="mobileMenuIconContainer"
            onClick={handleMoreMenuToggle}
          >
            <div className="mobileMenulink">
              <img
                className="mobileMenuIcon"
                src="icn/more-icn.svg"
                style={{ display: isMoreMenuOpen ? "none" : "flex" }}
              />
              <img
                className="mobileMenuIcon"
                src="icn/aboutme-icon.svg"
                style={{
                  display: isMoreMenuOpen ? "flex" : "none",
                  zIndex: "9999",
                }}
              />
              <p className="mobilMenuIconsName">{moreIconText}</p>
            </div>
          </li>
        </ul>
        {/* tray2 */}
        <ul id="mobileMenu-icon-tray2">
          <li className="mobileMenuIconContainer">
            <Link className="mobileMenulink" to="/profile">
              <img className="mobileMenuIcon" src="icn/portfolio-icon.svg" />
              <p className="mobilMenuIconsName">Profile</p>
            </Link>
          </li>
          <li className="mobileMenuIconContainer">
            <Link className="mobileMenulink" to="/freebies">
              <img className="mobileMenuIcon" src="icn/Freebies-icon.svg" />
              <p className="mobilMenuIconsName">Freebies</p>
            </Link>
          </li>
          <li className="mobileMenuIconContainer">
            <Link className="mobileMenulink" to="/contact">
              <img className="mobileMenuIcon" src="icn/locker.svg" />
              <p className="mobilMenuIconsName">Locker1</p>
            </Link>
          </li>
          <li className="mobileMenuIconContainer">
            <Link className="mobileMenulink" to="/shop">
              <img className="mobileMenuIcon" src="icn/locker.svg" />
              <p className="mobilMenuIconsName">Shop</p>
            </Link>
          </li>
          <li className="mobileMenuIconContainer">
            <div className="mobileMenulink">
              <img className="mobileMenuIcon" src="icn/locker.svg" />
              <p className="mobilMenuIconsName">Locker3</p>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
}
