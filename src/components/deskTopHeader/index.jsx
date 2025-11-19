import { Link } from "react-router-dom";
import "./style.css";

export default function DesktopHeader() {
  return (
    <>
      {/* site logo */}
      <div id="header-site-logo">
        <a href="">
          <img
            id="header-site-logo-img"
            src="img/site-logo-TH.png"
            alt="site logo the words TorHulugh written in signature form with a crown on the T"
          />
        </a>
      </div>
      {/* <!-- open & collapse menu button --> */}
      <div id="desktopMenu-open-close-btn-container">
        {/* close button */}
        <div id="desktopMenu-collapse-button">
          <img
            id="desktopMenu-collapse-btn-icon"
            src="icn/spgy-close-icon.svg"
            alt="desktopMenu close Icon"
          />
        </div>
        {/* <!-- open button --> */}
        <div id="desktopMenu-open-button">
          <img
            id="desktopMenu-open-btn-icon"
            src="icn/open-menu-icn.svg"
            alt=" open desktop menu Icon"
          />
        </div>
      </div>
      <header>
        {/* screen mode */}
        <div id="screen-mode">
          <img id="light-mode-icn" src="icn/light-mode.svg" alt="" />
          <img id="dark-mode-icn" src="icn/DARK.svg" alt="" />
        </div>
        <nav id="desktop-menu">
          <div id="desktopMenu-background-color">
            {/* menu icons */}
            <ul id="desktopMenu-icon-tray">
              <li className="desktopMenuIconContainer">
                <Link className="desktopMenuIconLink" to="/">
                  <img className="desktopMenuIcon" src="icn/home-icon.svg" />
                  <p className="desktopMenuIconsName">Home</p>
                  {/* hover effect */}
                  <div className="desktopMenuIconHoverEffect">
                    <div className="greenBlur"></div>
                    <div className="purpleBlur"></div>
                    <div className="pinkBlur"></div>
                  </div>
                </Link>
              </li>
              <li className="desktopMenuIconContainer">
                <Link className="desktopMenuIconLink" to="/myworks">
                  <img className="desktopMenuIcon" src="icn/myworks-icon.svg" />
                  <p className="desktopMenuIconsName">My Work</p>
                  {/* hover effect */}
                  <div className="desktopMenuIconHoverEffect">
                    <div className="greenBlur"></div>
                    <div className="purpleBlur"></div>
                    <div className="pinkBlur"></div>
                  </div>
                </Link>
              </li>
              <li className="desktopMenuIconContainer">
                <Link className="desktopMenuIconLink" to="/gallery">
                  <img className="desktopMenuIcon" src="icn/gallery-icon.svg" />
                  <p className="desktopMenuIconsName">Gallery</p>
                  {/* hover effect */}
                  <div className="desktopMenuIconHoverEffect">
                    <div className="greenBlur"></div>
                    <div className="purpleBlur"></div>
                    <div className="pinkBlur"></div>
                  </div>
                </Link>
              </li>
              <li className="desktopMenuIconContainer">
                <Link className="desktopMenuIconLink" to="/contact">
                  <img className="desktopMenuIcon" src="icn/contact-icon.svg" />
                  <p className="desktopMenuIconsName">Contact Me</p>
                  {/* hover effect */}
                  <div className="desktopMenuIconHoverEffect">
                    <div className="greenBlur"></div>
                    <div className="purpleBlur"></div>
                    <div className="pinkBlur"></div>
                  </div>
                </Link>
              </li>
              <li className="desktopMenuIconContainer">
                <Link className="desktopMenuIconLink" to="/about">
                  <img className="desktopMenuIcon" src="icn/aboutme-icon.svg" />
                  <p className="desktopMenuIconsName">About Me</p>
                  {/* hover effect */}
                  <div className="desktopMenuIconHoverEffect">
                    <div className="greenBlur"></div>
                    <div className="purpleBlur"></div>
                    <div className="pinkBlur"></div>
                  </div>
                </Link>
              </li>

              <li className="desktopMenuIconContainer">
                <Link className="desktopMenuIconLink" to="/profile">
                  <img
                    className="desktopMenuIcon"
                    src="icn/portfolio-icon.svg"
                  />
                  <p className="desktopMenuIconsName">Portfolio</p>
                  {/* hover effect */}
                  <div className="desktopMenuIconHoverEffect">
                    <div className="greenBlur"></div>
                    <div className="purpleBlur"></div>
                    <div className="pinkBlur"></div>
                  </div>
                </Link>
              </li>

              <li className="desktopMenuIconContainer">
                <Link className="desktopMenuIconLink" to="/freebies">
                  <img
                    className="desktopMenuIcon"
                    src="icn/Freebies-icon.svg"
                  />
                  <p className="desktopMenuIconsName">Freebies</p>
                  {/* hover effect */}
                  <div className="desktopMenuIconHoverEffect">
                    <div className="greenBlur"></div>
                    <div className="purpleBlur"></div>
                    <div className="pinkBlur"></div>
                  </div>
                </Link>
              </li>
              <li className="desktopMenuIconContainer">
                <div className="desktopMenuIconLink">
                  <img id="light-mode" src="icn/light-mode.svg" />
                  <img id="dark-mode" src="icn/DARK.svg" />
                  <p className="desktopMenuIconsName">Theme</p>
                  {/* hover effect */}
                  <div className="desktopMenuIconHoverEffect">
                    <div className="greenBlur"></div>
                    <div className="purpleBlur"></div>
                    <div className="pinkBlur"></div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
}
