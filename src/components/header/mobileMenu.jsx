import "./header.css";

export default function Mobile_Header() {
  return (
 
    <nav id="mobile-menu">
      <div id="mobileMenu-background-color">
        {/* <!-- tray1 --> */}
        <ul id="mobileMenu-icon-tray1">
          <li class="mobileMenuIconContainer">
            <a class="mobileMenulink" href="index.html">
              <img class="mobileMenuIcon" src="icn/home-icon.svg" />
              <p class="mobilMenuIconsName">Home</p>
            </a>
          </li>
          <li class="mobileMenuIconContainer">
            <a class="mobileMenulink" href="pages/my-works.html">
              <img class="mobileMenuIcon" src="icn/myworks-icon.svg" />
              <p class="mobilMenuIconsName">craft</p>
            </a>
          </li>
          <li class="mobileMenuIconContainer">
            <a class="mobileMenulink" href="pages/gallery.html">
              <img class="mobileMenuIcon" src="icn/gallery-icon.svg" />
              <p class="mobilMenuIconsName">Gallery</p>
            </a>
          </li>
          <li class="mobileMenuIconContainer">
            <a class="mobileMenulink" href="pages/contact-me.html">
              <img class="mobileMenuIcon" src="icn/contact-icon.svg" />
              <p class="mobilMenuIconsName">Contact</p>
            </a>
          </li>
          <li class="mobileMenuIconContainer">
            <a class="mobileMenulink" href="">
              <img class="mobileMenuIcon" src="icn/more-icn.svg" />
              <p class="mobilMenuIconsName">More</p>
            </a>
          </li>
        </ul>
        {/* <!-- tray2 --> */}
        <ul id="mobileMenu-icon-tray2">
          <li class="mobileMenuIconContainer">
            <a class="mobileMenulink" href="pages/profile.html">
              <img class="mobileMenuIcon" src="icn/portfolio-icon.svg" />
              <p class="mobilMenuIconsName">Portfolio</p>
            </a>
          </li>
          <li class="mobileMenuIconContainer">
            <a class="mobileMenulink" href="pages/freebies.html">
              <img class="mobileMenuIcon" src="icn/Freebies-icon.svg" />
              <p class="mobilMenuIconsName">Freebies</p>
            </a>
          </li>
        </ul>
      </div>
    </nav>
    
  )
}