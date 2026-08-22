import { Link } from "react-router";
import "./capsuleCard.css";

export default function RecentActivities() {
  return (
    <section id="recentAcivities--container">
      {/* Recent activities section header */}
      <div className="squircleStyle--header">
        {/* <img
          className="squircleStyle--header--icn"
          src="icn/favourite-icon.svg"
          alt="star icon for recent activities section header"
        /> */}
        <p className="squircleStyle--header--title">Stream</p>
      </div>
      {/* capsule cards container */}
      <div className="capsuleCards--Container">
        {/* capsule card 1 */}
        <Link className="capuslecard--link" to="/coffee-with-the-king">
          <div className="capsule--card">
            <div className="capsuleCard-foreground-grad"></div>
            <div className="capsuleCard-background"></div>
            <div className="capsuleCard-backdrop-grad"></div>
            <img
              className="capsuleCard-img"
              src="img/j2.png"
              alt=""
            />
            <div className="capsuleCard-txt">
              <h4>Coffe with the king:</h4>
              <p className="capsuleCard-discription">
                See how very much our Father loves us, for He calls us His
                children.
              </p>
            </div>
          </div>
        </Link>
        {/* capsule card 2 */}
        <Link className="capuslecard--link" to="/suyarama">
          <div className="capsule--card">
            <div className="capsuleCard-foreground-grad"></div>
            <div className="capsuleCard-background"></div>
            <div className="capsuleCard-backdrop-grad"></div>
            <img
              className="capsuleCard-img"
              src="img/suya.png"
              alt=""
            />
            <div className="capsuleCard-txt">
              <h4>Suyarama:</h4>
              <p className="capsuleCard-discription">
                simplifying asset library web experience focused on the needs of
                modern day users.
              </p>
            </div>
          </div>
        </Link>
        {/* capsule card 3 */}
        <Link className="capuslecard--link" to="/fatimiyahairs">
          <div className="capsule--card">
            <div className="capsuleCard-foreground-grad"></div>
            <div className="capsuleCard-background"></div>
            <div className="capsuleCard-backdrop-grad"></div>
            <img
              className="capsuleCard-img"
              src="img/fatimiya-pp.png"
              alt=""
            />
            <div className="capsuleCard-txt">
              <h4>Fatimiyahair:</h4>
              <p className="capsuleCard-discription">
                An efficient, aesthetic and satisfying link management tool.
                designed and built to meet user needs and desires
              </p>
            </div>
          </div>
        </Link>
        {/* capsule card 4 */}
        <Link className="capuslecard--link" to="">
          <div className="capsule--card">
            <div className="capsuleCard-foreground-grad"></div>
            <div className="capsuleCard-background"></div>
            <div className="capsuleCard-backdrop-grad"></div>
            <img
              className="capsuleCard-img"
              src="img/i44.png"
              alt=""
            />
            <div className="capsuleCard-txt">
              <h4>Vandeferic</h4>
              <p className="capsuleCard-discription">
                Designing an inclusive world, that listens and speaks to all
                individual users.
              </p>
            </div>
          </div>
        </Link>
        {/* capsule card 5 */}
        <Link className="capuslecard--link" to="">
          <div className="capsule--card">
            <div className="capsuleCard-foreground-grad"></div>
            <div className="capsuleCard-background"></div>
            <div className="capsuleCard-backdrop-grad"></div>
            <img className="capsuleCard-img" src="img/i2.png" alt="" />
            <div className="capsuleCard-txt">
              <h4>Jewelryfic:</h4>
              <p className="capsuleCard-discription">
                Re-imaginging music streaming campaigning's and new musical
                talent discovery.
              </p>
            </div>
          </div>
        </Link>
        {/* capsule card 6 */}
        <Link className="capuslecard--link" to="/tsv">
          <div className="capsule--card">
            <div className="capsuleCard-foreground-grad"></div>
            <div className="capsuleCard-background"></div>
            <div className="capsuleCard-backdrop-grad"></div>
            <img
              className="capsuleCard-img"
              src="img/i3.png"
              alt=""
            />
            <div className="capsuleCard-txt">
              <h4>TVS:</h4>
              <p className="capsuleCard-discription">
                Awakening the siren queen, to further allure the world with her
                enchanting beauty and irresistible charm.
              </p>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
}
