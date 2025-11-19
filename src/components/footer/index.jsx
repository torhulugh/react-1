import "./style.css";

export default function Footer() {
  return (
    <footer className="buttom-footer">
      <div id="footer--indicator--divider">
        <div id="footer--indicator--divider--topline"></div>
        <div id="footer--indicator--divider--buttomline"></div>
      </div>

      <div className="footer-social-icons">
        <a href="https://www.instagram.com/torhulugh">
          <img className="footer-icons" src="/icn/instagram-icn.svg" alt="" />
        </a>
        <a href="https://www.linkedin.com/in/tor-hulugh-88aa87201/">
          <img className="footer-icons" src="/icn/linkedin-icn.svg" alt="" />
        </a>
        <a href="https://dribbble.com/torhulugh">
          <img className="footer-icons" src="/icn/dribbble-icn.svg" alt="" />
        </a>
        <a href="https://www.behance.net/torhulugh">
          <img className="footer-icons" src="/icn/behance-icn.svg" alt="" />
        </a>
        <a href="https://github.com/torhulugh">
          <img className="footer-icons" src="/icn/github-icn.svg" alt="" />
        </a>
      </div>
    </footer>
  );
}
