import "./header.css";

export default function Desktop_Header() {
  return (
 
    <header>
      {/* <!-- site logo --> */}
      <div id="header-site-logo">
        <a href="">
          <img
            id="header-site-logo-img"
            src="/icn/site-logo-TH.png"
            alt="site logo the words TorHulugh written in signature form with a crown on the T"
          />
        </a>
      </div>
      {/* <!-- oc button --> */}
      <div id="desktopMenu-collapse-button">
        <img
          id="desktopMenu-collapese-btn-icon"
          src="img/spgy-close-icon.svg"
          alt="desktopMenu close Icon"
        />
      </div>
      {/* <!-- screen mode --> */}
      <div id="screen-mode">
        <img id="light-mode-icn" src="./header-assets/light-mode.svg" alt="" />
        <img id="dark-mode-icn" src="icn/DARK.svg" alt="" />
      </div>
      <nav id="desktop-menu">
        <div id="desktopMenu-background-color">
          {/* <!-- menu icons --> */}
          <ul id="desktopMenu-icon-tray">
            <li class="desktopMenuIconContainer">
              <a class="desktopMenuIconLink" href="index.html">
                <img class="desktopMenuIcon" src="icn/home-icon.svg" />
                <p class="desktopMenuIconsName">Home</p>
                {/* <!-- hover effect --> */}
                <div class="desktopMenuIconHoverEffect">
                  <div class="greenBlur"></div>
                  <div class="purpleBlur"></div>
                  <div class="pinkBlur"></div>
                </div>
              </a>
            </li>
            <li class="desktopMenuIconContainer">
              <a class="desktopMenuIconLink" href="pages/my-works.html">
                <img class="desktopMenuIcon" src="icn/myworks-icon.svg" />
                <p class="desktopMenuIconsName">My Work</p>
                {/* <!-- hover effect --> */}
                <div class="desktopMenuIconHoverEffect">
                  <div class="greenBlur"></div>
                  <div class="purpleBlur"></div>
                  <div class="pinkBlur"></div>
                </div>
              </a>
            </li>
            <li class="desktopMenuIconContainer">
              <a class="desktopMenuIconLink" href="pages/gallery.html">
                <img class="desktopMenuIcon" src="icn/gallery-icon.svg" />
                <p class="desktopMenuIconsName">Gallery</p>
                {/* <!-- hover effect --> */}
                <div class="desktopMenuIconHoverEffect">
                  <div class="greenBlur"></div>
                  <div class="purpleBlur"></div>
                  <div class="pinkBlur"></div>
                </div>
              </a>
            </li>
            <li class="desktopMenuIconContainer">
              <a class="desktopMenuIconLink" href="pages/contact-me.html">
                <img class="desktopMenuIcon" src="icn/contact-icon.svg" />
                <p class="desktopMenuIconsName">Contact Me</p>
                {/* <!-- hover effect --> */}
                <div class="desktopMenuIconHoverEffect">
                  <div class="greenBlur"></div>
                  <div class="purpleBlur"></div>
                  <div class="pinkBlur"></div>
                </div>
              </a>
            </li>
            <li class="desktopMenuIconContainer">
              <a class="desktopMenuIconLink" href="pages/about-me.html">
                <img class="desktopMenuIcon" src="icn/aboutme-icon.svg" />
                <p class="desktopMenuIconsName">About Me</p>
                {/* <!-- hover effect --> */}
                <div class="desktopMenuIconHoverEffect">
                  <div class="greenBlur"></div>
                  <div class="purpleBlur"></div>
                  <div class="pinkBlur"></div>
                </div>
              </a>
            </li>

            <li class="desktopMenuIconContainer">
              <a class="desktopMenuIconLink" href="pages/profile.html">
                <img class="desktopMenuIcon" src="icn/portfolio-icon.svg" />
                <p class="desktopMenuIconsName">Portfolio</p>
                {/* <!-- hover effect --> */}
                <div class="desktopMenuIconHoverEffect">
                  <div class="greenBlur"></div>
                  <div class="purpleBlur"></div>
                  <div class="pinkBlur"></div>
                </div>
              </a>
            </li>

            <li class="desktopMenuIconContainer">
              <a class="desktopMenuIconLink" href="pages/freebies.html">
                <img class="desktopMenuIcon" src="icn/Freebies-icon.svg" />
                <p class="desktopMenuIconsName">Freebies</p>
                {/* <!-- hover effect --> */}
                <div class="desktopMenuIconHoverEffect">
                  <div class="greenBlur"></div>
                  <div class="purpleBlur"></div>
                  <div class="pinkBlur"></div>
                </div>
              </a>
            </li>
            <li class="desktopMenuIconContainer">
              <a class="desktopMenuIconLink" href="">
                <img id="light-mode" src="icn/light-mode.svg" />
                <img id="dark-mode" src="icn/DARK.svg" />
                <p class="desktopMenuIconsName">light</p>
                {/* <!-- hover effect --> */}
                <div class="desktopMenuIconHoverEffect">
                  <div class="greenBlur"></div>
                  <div class="purpleBlur"></div>
                  <div class="pinkBlur"></div>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
    
  )
}