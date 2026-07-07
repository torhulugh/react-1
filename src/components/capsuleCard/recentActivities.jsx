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
        <Link className="capuslecard--link" to="">
          <div className="capsule--card">
            <div className="capsuleCard-foreground-grad"></div>
            <div className="capsuleCard-background"></div>
            <div className="capsuleCard-backdrop-grad"></div>
            <img
              className="capsuleCard-img"
              src="featured-img/vmac.png"
              alt=""
            />
            <div className="capsuleCard-txt">
              <h4>Visual Magic Content:</h4>
              <p className="capsuleCard-discription">
                simplifying asset library web experience focused on the needs of
                modern day users.
              </p>
            </div>
          </div>
        </Link>
        {/* capsule card 3 */}
        <Link className="capuslecard--link" to="">
          <div className="capsule--card">
            <div className="capsuleCard-foreground-grad"></div>
            <div className="capsuleCard-background"></div>
            <div className="capsuleCard-backdrop-grad"></div>
            <img
              className="capsuleCard-img"
              src="featured-img/linkmaiden.png"
              alt=""
            />
            <div className="capsuleCard-txt">
              <h4>Linkmaidien:</h4>
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
              src="featured-img/circle of visom.png"
              alt=""
            />
            <div className="capsuleCard-txt">
              <h4>Circle of Vision:</h4>
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
            <img className="capsuleCard-img" src="img/PR0JECT 365.png" alt="" />
            <div className="capsuleCard-txt">
              <h4>Project 365 Website:</h4>
              <p className="capsuleCard-discription">
                Re-imaginging music streaming campaigning's and new musical
                talent discovery.
              </p>
            </div>
          </div>
        </Link>
        {/* capsule card 6 */}
        <Link className="capuslecard--link" to="">
          <div className="capsule--card">
            <div className="capsuleCard-foreground-grad"></div>
            <div className="capsuleCard-background"></div>
            <div className="capsuleCard-backdrop-grad"></div>
            <img
              className="capsuleCard-img"
              src="featured-img/STARBUCKS.png"
              alt=""
            />
            <div className="capsuleCard-txt">
              <h4>Starbucks siren:</h4>
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
